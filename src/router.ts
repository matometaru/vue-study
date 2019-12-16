import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Directory from './views/Directory.vue';
import Computed from './views/Computed.vue';
import Watch from './views/Watch.vue';
import Signup from './views/Signup.vue';
import Signin from './views/Signin.vue';
import Member from './views/member/Member.vue';
import MemberEdit from './views/member/MemberEdit.vue';

import firebase from 'firebase';

Vue.use(Router);

const router = new Router({
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
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin,
    },
    {
      path: '/member',
      name: 'Member',
      component: Member,
      meta: {requiresAuth: true},
    },
    {
      path: '/member/edit',
      name: 'MemberEdit',
      component: MemberEdit,
      meta: {requiresAuth: true},
    },
  ],
});


router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => {
    return record.meta.requiresAuth;
  });
  if (requiresAuth) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        next();
      } else {
        next({
          path: '/signin',
          query: {redirect: to.fullPath},
        });
      }
    });
  } else {
    next(); // next() を常に呼び出すようにしてください!
  }
});

export default router;
