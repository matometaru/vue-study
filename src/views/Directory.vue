<template>
  <div>
    <Directory />
  </div>
</template>

<script>
import Vue from 'vue';
import Directory from '@/containers/Directory.vue';

export default Vue.extend({
  name: 'DirectoryPage',
  components: {
    Directory,
  },
});
</script>

<style scoped lang="scss"></style>
