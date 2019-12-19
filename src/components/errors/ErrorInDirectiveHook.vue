<template>
  <div v-error>
    error-in-directive-hook
  </div>
</template>

<script>
export default {
  name: 'ErrorInComputedFunction',
  directives: {
    error: {
      inserted() {
        throw new Error('from directive hook');
      },
    },
  },
};
</script>
