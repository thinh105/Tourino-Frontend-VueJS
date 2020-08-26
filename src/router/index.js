import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import { CHECK_AUTH } from '@/store/type/actions';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    props: (route) => ({ query: route.query }),
  },
  {
    name: 'Tour',
    path: '/tours/:slug',
    component: () => import('@/views/Tour.vue'),
    props: true,
  },
  {
    name: 'User',
    path: '/User/',
    component: () => import('@/views/User.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'UserProfile',
    path: '/User/Profile',
    component: () => import('@/views/User.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'NotFound',
    path: '*',
    component: () => import('@/views/404.vue'),
  },
  {
    name: 'Auth',
    path: '/Authentication',
    component: () => import('@/views/Authentication.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// Ensure we checked auth before each page load.
router.beforeEach((to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }

  // check auth before first load or page reload to get token to get the user data
  store.dispatch(CHECK_AUTH).then(() => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (store.getters.isAuthenticated) {
        next();
        return;
      }
      next('/Authentication');
    } else {
      next();
    }
  });
});

export default router;
