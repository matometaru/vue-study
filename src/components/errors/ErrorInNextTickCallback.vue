<template>
  <div>error-in-nexttick-callback</div>
</template>

<script>
export default {
  name: 'ErrorInNexttickCallback',
  mounted() {
    this.$nextTick(() => {
      throw new Error('from nextTick callback');
    });
  },
};
</script>
