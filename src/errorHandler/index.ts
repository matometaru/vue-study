import Vue from 'vue';

Vue.config.errorHandler = (err, vm, info) => {
  alert(err);
};
Vue.config.warnHandler = (msg, vm, trace) => {
  alert(msg);
};
window.addEventListener("error", event => {
  alert(event.error);
});
window.addEventListener("unhandledrejection", event => {
  alert(event.reason);
});