<template>
  <div>error-in-filter-function {{ value | test }}</div>
</template>

<script>
export default {
  name: 'ErrorInFilterFunction',
  filters: {
    test() {
      throw new Error('from filter function');
    },
  },
  data() {
    return {
      value: 1,
    };
  },
};
</script>
