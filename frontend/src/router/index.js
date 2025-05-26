import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/LoginView.vue';
import Home from '../components/HomeVue.vue';
import AuthService from '../services/AuthService';

Vue.use(Router);

const router = new Router({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      beforeEnter: (to, from, next) => {
        if (!AuthService.isAuthenticated()) next('/login');
        else next();
      },
    },
    { path: '*', redirect: '/login' },
  ],
});

export default router;
