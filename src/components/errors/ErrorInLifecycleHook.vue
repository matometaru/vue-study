<template>
  <div>error-in-lifecycle-hook</div>
</template>

<script>
export default {
  name: 'ErrorInLifecycleHook',
  mounted() {
    throw new Error('from lifecycle hook');
  },
};
</script>
