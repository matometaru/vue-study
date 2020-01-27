import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import firebase from 'firebase';
import config from '@/config';
import '@/errorHandler';
import VueI18n from 'vue-i18n';

Vue.config.productionTip = false;

firebase.initializeApp(config.firebase);

Vue.use(VueI18n);
const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
}
const i18n = new VueI18n({
  locale: 'ja',
  messages,
})

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => {
    return h(App);
  },
}).$mount('#app');
