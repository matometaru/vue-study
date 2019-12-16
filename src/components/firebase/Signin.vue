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
        <v-text-field
          v-model="username"
          type="text"
          placeholder="Username"
        />
        <v-text-field
          v-model="password"
          type="password"
          label="Password"
        />
        <v-btn
          color="primary"
          @click="signIn"
        >
          ログイン
        </v-btn>
        <p class="mt-4">
          You don't have an account?
          <router-link to="/signup">
            create account now!!
          </router-link>
        </p>
        <v-btn
          color="primary"
          @click="signInTwitter"
        >
          ツイッター
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
      username: '',
      password: '',
    };
  },
  methods: {
    async signIn(): Promise<void> {
      try {
        const {user} = await firebase
            .auth()
            .signInWithEmailAndPassword(this.username, this.password);
        if (user) {
          alert('Success!');
        }
      } catch (e) {
        alert(e);
      }
    },
    async signInTwitter(): Promise<void> {
      const provider = new firebase.auth.TwitterAuthProvider();
      firebase.auth().signInWithPopup(provider);
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
