<template>
  <div class="computed">
    <ul>
      <li v-for="item in items" :key="item">
        {{ item.name }}: {{ item.price }}
      </li>
    </ul>
    <ul>
      <li v-for="item in filteredItems" :key="item">
        {{ item.name }}: {{ item.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: "Computed",
  data() {
    return {
      query: {
        code: -1,
        price: -1,
        priceOrder: -1,
      },
      items: [
        { code: 1644, name: "オリックス", price: 1644 },
        { code: 9861, name: "吉野家", price: 2672 },
        { code: 2752, name: "フジオフード", price: 3040 },
        { code: 3915, name: "テラスカイ", price: 1840 }
      ]
    };
  },
  computed: {
    codeItems() {
      return this.items.filter((v) => {
        return v.code === this.query.code
      });
    },
    priceOrderItems() {
      // sortは破壊的なのでsliceをかます
      return this.items.slice().sort((a, b) => {
        return b.price - a.price
      });
    },
    filteredItems() {
      if(this.query.code !=== -1) {
        
      }
    }
  },
  methods: {
    onPlayGacha() {
      return "";
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
