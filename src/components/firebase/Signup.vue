<template>
  <div class="signup">
    <form
      class="mx-auto"
      style="max-width: 386px;"
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
        @click="signUp"
      >
        登録
      </v-btn>
      <p class="mt-4">
        Do you have an account?
        <router-link to="/signin">
          sign in now!!
        </router-link>
      </p>
    </form>
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
