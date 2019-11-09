<template>
  <v-container>
    <h1>会員ページ</h1>
    <Member />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Member from '@/components/firebase/Member.vue';

export default Vue.extend({
  name: 'MemberPage',
  components: {
    Member,
  },
});
</script>
