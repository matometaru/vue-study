<template>
  <button @click="test">
    Error in Custom Event
  </button>
</template>

<script>
export default {
  name: 'CustomEventComponent',
  methods: {
    test() {
      this.$emit('test');
    },
  },
};
</script>
