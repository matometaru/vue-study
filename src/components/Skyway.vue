<template>
  <div class="skyway">
    <div id="fields">
      <template v-for="player in players">
        <div :key="player.id" :style="`top: ${player.position.positionY()}px; left: ${player.position.positionX()}px`">
          {{ player.name }}
        </div>
      </template>
    </div>
    <v-container fluid>
      <h1>SkyWay</h1>
      <v-text-field
        v-model="inputs.roomId"
        label="Room ID"
      ></v-text-field>
      <v-btn @click="connection(inputs.roomId)">接続</v-btn>
      <pre>
        {{ messages }}
      </pre>
      <v-text-field
        v-model="localMessages"
        label="メッセージ"
      ></v-text-field>
      <v-btn @click="onClickSend()">送信</v-btn>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue';
import Peer, {MeshRoom} from 'skyway-js';
import config from '@/config';
import Player from '@/models/Player';
import Map from '@/models/Map';

type Data = {
  peer: Peer;
  room: MeshRoom | null;
  map: any[][];
  inputs: any;
  messages: string;
  localMessages: string;
  players: any; // ルームにいるプレイヤー一覧
}

export default Vue.extend({
  name: 'Skyway',
  data(): Data {
    return {
      peer: new Peer({
        key: config.skyway.key,
        debug: 3,
      }),
      room: null,
      map: new Map(10, 10).generate(),
      inputs: {
        roomId: '',
      },
      messages: '',
      localMessages: '',
      players: {},
    };
  },
  async mounted() {
    // 全キーイベントを設定
    window.addEventListener("keydown", this.keydownController);
    // 描画
    setInterval(() => this.draw(), 500)
  },
  methods: {
    // ターゲットのIDに接続
    connection(roomId: string): void {
      if (!this.peer.open) {
        return;
      }

      this.room = this.peer.joinRoom<MeshRoom>(this.inputs.roomId, {
        mode: 'mesh',
      });

      // 新規にPeerがルームへ入室したときに発生します。
      this.room.once('open', () => {
        this.messages += '=== You joined ===\n';
      });

      // ルームに新しいPeerが参加したときに発生します。
      this.room.on('peerJoin', (peerId: string) => {
        this.messages += `=== ${peerId} joined2 ===\n`;
        this.players[peerId] = new Player(peerId, '●');
      });

      // 他のユーザーから送信されたデータを受信した時に発生します。
      this.room.on('data', ({data, src}) => {
        const peerId = src;
        console.log(`peerId: ${peerId}`)
        if (!this.players.hasOwnProperty(peerId)) {
          this.players[peerId] = new Player(peerId, '▲');
        }
        this.messages += `${peerId}: ${data}\n`;
        this.players[peerId].move(data)
      });

      // Peerがルームを退出したときに発生します。
      this.room.on('peerLeave', (peerId: string) => {
        this.messages += `=== ${peerId} left ===\n`;
      });

      // ルームをcloseしたときに発生します。
      this.room.once('close', () => {
        this.messages += '== You left ===\n';
      });
    },
    sendMessages(messages: string) {
      if (!this.room) {
        return;
      }
      this.room.send(messages);
      this.messages += `You: ${messages}\n`;
    },
    onClickSend() {
      if (!this.room) {
        return;
      }
      const data = this.localMessages;
      this.room.send(data);

      this.messages += `${this.peer.id}: ${data}\n`;
      this.localMessages = '';
    },
    keydownController(event: KeyboardEvent) {
      switch (event.keyCode) {
        case 37:
          // Left
          event.preventDefault()
          this.sendMessages('←')
          break;
        case 38:
          // Up
          event.preventDefault()
          this.sendMessages('↑')
          break;
        case 39:
          // Right
          event.preventDefault()
          this.sendMessages('→')
          break;
        case 40:
          // Down
          event.preventDefault()
          this.sendMessages('↓')
          break;
      }
    },
    // プレイヤーを描画（とりあえずインターバルで実行）
    draw() {
      // let html = "";
      // for (const key in this.players) {
      //   const positionX = this.players[key].position.x * 5;
      //   const positionY = this.players[key].position.y * 5;
      //   html += `
      //     <div class="${key}" style="top: ${positionX}; left ${positionY};">
      //       ${this.players[key].name}
      //     </div>
      //   `;
      //   console.log(this.players[key].position);
      // }
      // const fields: any = document.getElementById('fields');
      // fields.textContent = html;
    }
  },
});
</script>

<style lang="scss" scoped>
#fields {
  position: relative;
  width: 500px;
  width: 500px;
  > div {
    position: absolute;
  }
}
table {
  height: 500px;
  width: 500px;
}
td {
  width: 50px;
  height: 50px;
  background-color:#ddd;
}
</style>