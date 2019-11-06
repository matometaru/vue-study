<template>
  <div class="about">
    <h1 class="about-header">
      ガチャ
    </h1>
    <gacha-list />
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue';

export default Vue.extend({
  name: 'About',
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      items: [] as PropType<{}>,
    };
  },
  created() {
    //
  },
  mounted() {
    //
  },
  methods: {
    onPlayGacha(): string {
      return '';
    },
  },
});
</script>

<style scoped lang="scss">
.about {
  margin: 40px 0 0;
  &-header {
    font-size: 20px;
  }
}
</style>
