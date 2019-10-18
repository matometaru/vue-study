<template>
  <div>
    <UserList :userIds="userIds" />
    <ItemList :userIds="userIds" />
  </div>
</template>

<script>
import Vue from "vue";
import UserList from "@/components/UserList.vue";
import ItemList from "@/components/ItemList.vue";
import config from '@/config'

export default Vue.extend({
  name: "Directory",
  components: {
    UserList,
    ItemList,
  },
  data() {
    return {
      userIds: config.userIds,
    };
  },
});
</script>

<style scoped lang="scss">
</style>