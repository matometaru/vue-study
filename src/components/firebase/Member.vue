<template>
  <div class="signin">
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="6"
      >
        <p>こんにちは{{ user.displayName }}さん</p>
        <img
          :src="user.photoURL"
          alt=""
        >
        <v-btn
          color="primary"
          @click="signOut"
        >
          ログアウト
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue';
import firebase from 'firebase';

export default Vue.extend({
  name: 'Signin',
  data() {
    return {
      user: {},
    };
  },
  async mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      // ログイン状態ならuserが取得できる
      this.user = user ? user : {};
    });
  },
  methods: {
    async signOut(): Promise<void> {
      try {
        await firebase.auth().signOut();
        this.$router.push('/');
      } catch (e) {
        alert(e);
      }
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
