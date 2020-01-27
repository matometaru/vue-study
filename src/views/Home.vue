<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <p>{{ $t("message.hello") }}</p>
    <p>{{ $t("test.hello") }}</p>
    <p>{{ $t("buttons.save") }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

const messages = {
  en: {
    test: {
      hello: 'metal'
    }
  },
  ja: {
    test: {
      hello: 'めたる'
    }
  }
}
const common = {
  en: {
    buttons: {
      save: "Save",
    }
  },
  ja: {
    buttons: {
      save: "保存",
    }
  }
}

export default Vue.extend({
  name: 'HomePage',
  components: {
    HelloWorld,
  },
  i18n: {
    messages: messages,
    sharedMessages: common,
  }
});
</script>
