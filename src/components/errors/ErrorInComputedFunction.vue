<template>
  <div>error-in-computed-function {{ errorProperty }}</div>
</template>

<script>
export default {
  name: 'ErrorInComputedFunction',
  data() {
    return {
      value: 1,
    };
  },
  computed: {
    errorProperty() {
      if (this.value > 0) {
        throw new Error('from computed function');
      }
      return this.value;
    },
  },
};
</script>
