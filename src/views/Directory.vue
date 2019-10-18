<template>
  <div>
    <UserList />
    <ItemList />
  </div>
</template>

<script>
import Vue from "vue";
import UserList from "@/components/UserList.vue";
import ItemList from "@/components/ItemList.vue";

export default Vue.extend({
  name: "directory",
  components: {
    UserList,
    ItemList,
  }
});
</script>

<style scoped lang="scss">
</style>