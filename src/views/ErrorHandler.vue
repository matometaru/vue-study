<template>
  <div class="error-handler">
    <h1>error-handlerについて</h1>
    <ErrorHandler />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ErrorHandler from '@/components/ErrorHandler.vue';

export default Vue.extend({
  name: 'ErrorHandlerPage',
  components: {
    ErrorHandler,
  },
});
</script>
