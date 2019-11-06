<template>
  <div class="user">
    <h2>ユーザー一覧</h2>
    <ul class="user-list">
      <li
        v-for="id in userIds"
        :key="id"
      >
        {{ id }}
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'UserList',
  props: {
    userIds: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
});
</script>

<style scoped lang="scss">
.user {
  &-list {
    li {
      display: inline-block;
      & + li {
        margin-left: 1em;
      }
    }
  }
}
</style>
