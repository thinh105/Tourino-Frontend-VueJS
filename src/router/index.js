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
  },
  {
    name: 'UserProfile',
    path: '/User/Profile',
    component: () => import('@/views/User.vue'),
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
  store.dispatch(CHECK_AUTH).then(next);
});

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth) {
//     if (!store.currentUser) {
//       next({
//         name: 'Home',
//       });
//     }
//   }
// });

export default router;
