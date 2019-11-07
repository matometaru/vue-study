<template>
  <div class="signup">
    <h2>Sign up</h2>
    <v-col cols="12">
      <v-row
        :align="alignment"
        :justify="justify"
        class="grey lighten-5"
        style="height: 300px;"
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
        <button @click="signUp">
          登録
        </button>
        <p>
          Do you have an account?
          <router-link to="/signin">
            sign in now!!
          </router-link>
        </p>
      </v-row>
    </v-col>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue';
import firebase from 'firebase';

export default Vue.extend({
  name: 'Signup',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async signUp(): Promise<void> {
      try {
        const {user} = await firebase
            .auth()
            .createUserWithEmailAndPassword(this.username, this.password);
        if (user) {
          alert(`Create account: ${user.email}`);
        }
      } catch (e) {
        alert(e);
      }
    },
  },
});
</script>

<style scoped lang="scss">
</style>
