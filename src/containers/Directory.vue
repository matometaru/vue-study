<template>
  <div>
    <UserList :userIds="userIds" />
    <ItemList :items="items" :userIds="userIds" :filter="filter" />
  </div>
</template>

<script>
import Vue from "vue";
import UserList from "@/components/UserList.vue";
import ItemList from "@/components/ItemList.vue";
import qiitaRepository from "@/repositories/qiitaRepository";
import config from "@/config";

export default Vue.extend({
  name: "Directory",
  components: {
    UserList,
    ItemList
  },
  data() {
    return {
      items: [],
      userIds: config.userIds,
      filter: {
        userId: "なし"
      }
    };
  },
  async mounted() {
    await this.fetchAllItem();
  },
  methods: {
    async fetchAllItem() {
      const fetchAllItems = [];
      for (const userId of this.userIds) {
        fetchAllItems.push(qiitaRepository.getItemsBy(userId));
      }
      Promise.all(fetchAllItems).then(itemsArray => {
        for (const userItems of itemsArray) {
          this.items.push(...userItems);
        }
      });
    }
  }
});
</script>

<style scoped lang="scss"></style>
