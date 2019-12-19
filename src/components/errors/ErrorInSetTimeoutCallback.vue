<template>
  <div>error-in-settimeout-callback</div>
</template>

<script>
export default {
  name: 'ErrorInSettimeoutCallback',
  mounted() {
    setTimeout(() => {
      throw new Error('from setTimeout callback');
    });
  },
};
</script>
