<template>
  <div>error-in-data-function</div>
</template>

<script>
export default {
  name: 'ErrorInDataFunction',
  data() {
    throw new Error('from data function');
  },
};
</script>
