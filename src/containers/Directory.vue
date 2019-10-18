<template>
  <div>
    <UserList :userIds="userIds" />
    <ItemList :items="items" :userIds="userIds" :filter="filter"/>
  </div>
</template>

<script>
import Vue from "vue";
import UserList from "@/components/UserList.vue";
import ItemList from "@/components/ItemList.vue";
import axios from 'axios'
import config from '@/config'

const client = axios.create({
  baseURL: "https://qiita.com/api/v2/",
  headers: {
    Authorization: "Bearer " + config.token
  }
});

export default Vue.extend({
  name: "Directory",
  components: {
    UserList,
    ItemList,
  },
  data() {
    return {
      items: [],
      userIds: config.userIds,
      filter: {
        userId: "なし"
      },
    };
  },
  async mounted() {
    await this.fetchAllItem();
  },
  methods: {
    async fetchAllItem() {
      const fetchAllItems = []
      for(const userId of this.userIds) {
        fetchAllItems.push(this.fetchItemsBy(userId));
      }
      Promise.all(fetchAllItems).then((itemsArray) => {
        for(const userItems of itemsArray) {
          this.items.push(...userItems);
        }
      })
    },
    async fetchItemsBy(userId) {
      const { data } = await client.get(`users/${userId}/items`);
      return data;
    },
  }
});
</script>

<style scoped lang="scss">
</style>