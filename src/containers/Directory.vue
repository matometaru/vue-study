<template>
  <div>
    <UserList :user-ids="userIds" />
    <ItemList
      :items="items"
      :user-ids="userIds"
      :filter="filter"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import UserList from '@/components/UserList.vue';
import ItemList from '@/components/ItemList.vue';
import qiitaRepository from '@/repositories/qiitaRepository';
import config from '@/config';
import QiitaItem from '@/models/QiitaItem';

type Data = {
  items: QiitaItem[];
  userIds: string[],
  filter: {
    userId: string;
  };
};

export default Vue.extend({
  name: 'Directory',
  components: {
    UserList,
    ItemList,
  },
  data(): Data {
    return {
      items: [],
      userIds: config.qiita.userIds,
      filter: {
        userId: 'なし',
      },
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
      Promise.all(fetchAllItems).then((itemsArray) => {
        for (const userItems of itemsArray) {
          this.items.push(...userItems);
        }
      });
    },
  },
});
</script>

<style scoped lang="scss"></style>
