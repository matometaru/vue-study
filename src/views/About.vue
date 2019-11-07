<template>
  <div class="about">
    <h1>This is an about page</h1>
    <About />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import About from '@/components/About.vue';

export default Vue.extend({
  name: 'AboutPage',
  components: {
    About,
  },
});
</script>
