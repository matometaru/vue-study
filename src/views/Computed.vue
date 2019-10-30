<template>
  <div class="computed">
    <h1>computedについて</h1>
    <Computed />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Computed from "@/components/Computed.vue";

export default Vue.extend({
  name: "computed",
  components: {
    Computed
  }
});
</script>