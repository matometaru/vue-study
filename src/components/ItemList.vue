<template>
  <div class="item">
    <h2 class="item-header">記事一覧</h2>
    <div>
      <label>ユーザで絞り込み: </label>
      <select v-model="filter.userId">
        <option value="なし">なし</option>
        <option v-for="id in userIds" :value="id" :key="id">{{ id }}</option>
      </select>
    </div>
    <ul class="item-list">
      <li v-for="item in filteredItems" :key="item.id">
        <a :href="item.url">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "ItemList",
  props: {
    items: Array,
    userIds: Array,
    filter: Object,
  },
  computed: {
    filteredItemsByUserId() {
      return this.items.filter((item) => {
        return item.user.id === this.filter.userId
      });
    },
    filteredItems() {
      if(this.filter.userId !== "なし") {
        return this.filteredItemsByUserId;
      }
      return this.items;
    },
  },
});
</script>

<style scoped lang="scss">
.item {
  &-list {
    font-size: 18px;
    text-align: left;
    width: 500px;
    margin: 0 auto;
    li {
      & + li {
        margin-top: .5em;
      }
    }
  }
}
</style>