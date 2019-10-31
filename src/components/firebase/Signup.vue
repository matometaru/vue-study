<template>
  <div class="signup">
    <h2>Sign up</h2>
    <input
      v-model="username"
      type="text"
      placeholder="Username"
    >
    <input
      v-model="password"
      type="password"
      placeholder="Password"
    >
    <button @click="signUp">
      登録
    </button>
    <p>
      Do you have an account?
      <router-link to="/signin">
        sign in now!!
      </router-link>
    </p>
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
