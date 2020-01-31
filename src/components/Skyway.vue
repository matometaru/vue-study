<template>
  <div class="skyway">
    <v-container fluid>
      <h1>SkyWay</h1>
      <p>{{ localId }}</p>
      <v-text-field
        v-model="inputs.remoteId"
        label="Label"
      ></v-text-field>
      <v-btn @click="connection(inputs.remoteId)">接続</v-btn>
      <p>messages: {{ messages }}</p>
      <p>localMessages: {{ localMessages }}</p>
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
import Peer, { DataConnection } from 'skyway-js';
import config from '@/config';

type Data = {
  peer: Peer;
  dataConnection: DataConnection | null;
  localId: string;
  inputs: any;
  messages: string;
  localMessages: string;
}

export default Vue.extend({
  name: 'Watch',
  data(): Data {
    return {
      peer: new Peer({
        key: config.skyway.key,
        debug: 3,
      }),
      dataConnection: null,
      localId: '',
      inputs: {
        remoteId: '',
      },
      messages: '',
      localMessages: '',
    };
  },
  async mounted() {
    this.peer.once('open', id => (this.localId = id));
    // オープン
    this.peer.once('open', (id: string) => (this.localId = id));
    // 全キーイベントを設定
    window.addEventListener("keydown", this.keydownController)
  },
  methods: {
    connection(remoteId: string): void {
      if (!this.peer.open) {
        return;
      }

      this.dataConnection = this.peer.connect(remoteId);

      this.dataConnection.once('open', async () => {
        this.messages += `=== DataConnection has been opened ===\n`;
      });

      this.dataConnection.on('data', (data: string) => {
        this.messages += `Remote: ${data}\n`;
      });
    },
    keydownController(event: KeyboardEvent) {
      // https://github.com/pione30/TypeScript-Vue-Tetris/blob/master/src/components/PlayField.vue
      switch (event.keyCode) {
        case 37:
        case 65:
          // Left or A
          event.preventDefault()
          break
        case 38:
        case 87:
          // Up or W
          event.preventDefault()
          break
        case 39:
        case 68:
          // Right or D
          event.preventDefault()
          break
        case 40:
        case 83:
          // Down or S
          event.preventDefault()
          break
      }
      if (!this.dataConnection) {
        return;
      }
      const data = this.localMessages;
      this.dataConnection.send(data);

      this.messages += `You: ${data}\n`;
      this.localMessages = '';
    },
    closeConnection(dataConnection: DataConnection) {
      if (!this.dataConnection) {
        return;
      }
      dataConnection.once('close', () => {
        this.messages += `=== DataConnection has been closed ===\n`;
      });
    },
  },
});
</script>

<style scoped lang="scss">
.computed {
  margin: 40px 0 0;
  ul {
    list-style: none;
    margin-top: 20px;
  }
}
</style>
