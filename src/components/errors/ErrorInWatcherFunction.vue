<template>
  <div>error-in-watcher-function</div>
</template>

<script>
export default {
  name: 'ErrorInWatcherFunction',
  data() {
    return {
      value: null,
    };
  },
  watch: {
    value() {
      throw new Error('from watcher function');
    },
  },
  mounted() {
    setTimeout(() => {
      this.value = 1;
    });
  },
};
</script>
