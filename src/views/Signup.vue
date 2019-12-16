<template>
  <v-container>
    <h1>サインアップ</h1>
    <Signup />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Signup from '@/components/firebase/Signup.vue';

export default Vue.extend({
  name: 'SignupPage',
  components: {
    Signup,
  },
});
</script>
