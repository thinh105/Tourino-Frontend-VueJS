import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

import { CHECK_AUTH } from './store/type/actions';

Vue.config.productionTip = false;

// Ensure we checked auth before each page load.
router.beforeEach((to, from, next) => {
  // Promise.all([store.dispatch(CHECK_AUTH)]).then(next);
  store.dispatch(CHECK_AUTH).then(next);
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
