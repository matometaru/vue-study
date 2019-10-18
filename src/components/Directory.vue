<template>
  <div class="directory">
    <button @click="fetchAllItem">取得</button>
    <ul class="directory-user-list">
      <li v-for="id in userIds" :key="id">
        {{ id }}
      </li>
    </ul>
    <ul class="directory-item-list">
      <li v-for="item in items" :key="item.id">
        <a :href="item.url">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
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
  data() {
    return {
      items: [],
      userIds: config.userIds,
    };
  },
  async mounted() {
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => {
        item.name === "kitanote"
      });
    }
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
.directory {
  margin: 40px 0 0;
  ul {
    list-style: none;
  }
  &-user {
    &-list {
      li {
        display: inline-block;
        & + li {
          margin-left: 1em;
        }
      }
    }
  }
  &-item {
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
}
</style>