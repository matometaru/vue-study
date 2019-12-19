<template>
  <div>error-in-unreturned-promise</div>
</template>

<script>
export default {
  name: 'ErrorInUnreturnedPromise',
  mounted() {
    this.test();
  },
  methods: {
    async test() {
      throw new Error('from unreturned promise');
    },
  },
};
</script>
