import Vue from 'vue';
import VueRouter from 'vue-router';

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
    component: () => import('@/components/core/Header/User/Profile.vue'),
  },
  {
    name: 'NotFound',
    path: '*',
    component: () => import('@/views/404.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
