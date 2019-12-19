<template>
  <div>error-in-method-called-in-template {{ test() }}</div>
</template>

<script>
export default {
  name: 'ErrorInMethodCalledInTemplate',
  methods: {
    test() {
      throw new Error('from method called in template');
    },
  },
};
</script>
