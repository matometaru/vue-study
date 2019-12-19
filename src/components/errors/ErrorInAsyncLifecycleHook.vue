<template>
  <div>error-in-async-lifecycle-hook</div>
</template>

<script>
export default {
  name: 'ErrorInAsyncLifecycleHook',
  async mounted() {
    throw new Error('from async lifecycle hook');
  },
};
</script>
