<template>
  <div class="computed">
    <h1>Skywayについて</h1>
    <Skyway />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Skyway from '@/components/Skyway.vue';

export default Vue.extend({
  name: 'SkywayPage',
  components: {
    Skyway,
  },
});
</script>
