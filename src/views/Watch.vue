<template>
  <div class="computed">
    <h1>watchについて</h1>
    <Watch />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Watch from '@/components/Watch.vue';

export default Vue.extend({
  name: 'WatchPage',
  components: {
    Watch,
  },
});
</script>
