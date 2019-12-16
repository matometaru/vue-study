<template>
  <v-container>
    <h1>会員ページ</h1>
    <MemberEdit />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import MemberEdit from '@/components/firebase/MemberEdit.vue';

export default Vue.extend({
  name: 'MemberPage',
  components: {
    MemberEdit,
  },
});
</script>
