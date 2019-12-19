import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import firebase from 'firebase';
import config from '@/config';

Vue.config.productionTip = false;

Vue.config.errorHandler = (err, vm, info) => {
  console.log('errorHandler');
  alert(err);
  console.log(`Captured in Vue.config.errorHan2dler: ${info}`, err);
};
Vue.config.warnHandler = (msg, vm, trace) => {
  alert(JSON.stringify(msg));
  console.log(`Captured in Vue.config.warnHandler\n${msg}${trace}`);
};
window.addEventListener("error", event => {
  console.log('addEventListener:error');
  alert(event.error);
});
window.addEventListener("unhandledrejection", event => {
  console.log('addEventListener:unhandledrejection');
  alert(event.reason);
});

firebase.initializeApp(config.firebase);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => {
    return h(App);
  },
}).$mount('#app');
