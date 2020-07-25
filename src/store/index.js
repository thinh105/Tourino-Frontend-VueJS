import Vue from 'vue';
import Vuex from 'vuex';
import tourList from './modules/tourList';
import auth from './modules/auth';
import error from './modules/error';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tourList,
    auth,
    error,
  },
});
