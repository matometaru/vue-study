<template>
  <div class="signin">
    <h1>ログイン</h1>
    <Signin />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Signin from '@/components/firebase/Signin.vue';

export default Vue.extend({
  name: 'Signin',
  components: {
    Signin,
  },
});
</script>
