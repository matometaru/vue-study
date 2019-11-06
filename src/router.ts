import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Directory from './views/Directory.vue';
import Computed from './views/Computed.vue';
import Watch from './views/Watch.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => {
        return import(/* webpackChunkName: "about" */ './views/About.vue');
      },
    },
    {
      path: '/directory',
      name: 'directory',
      component: Directory,
    },
    {
      path: '/computed',
      name: 'computed',
      component: Computed,
    },
    {
      path: '/watch',
      name: 'watch',
      component: Watch,
    },
  ],
});
