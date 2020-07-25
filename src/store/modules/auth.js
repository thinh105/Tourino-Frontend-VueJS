import ApiService from '@/common/service/api';
import JwtService from '@/common/service/jwt';
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CHECK_AUTH,
  UPDATE_USER,
} from '../type/actions.js';

import { SET_AUTH, PURGE_AUTH, SET_ERROR } from '../type/mutations.js';

const state = {
  user: null,
  // // isAuthenticated: !!JwtService.getToken(),
  // isAuthenticated: null,
};

const getters = {
  currentUser: (state) => state.user,
  // isAuthenticated: (state) => state.isAuthenticated,
};

const actions = {
  // async [LOGIN]({ dispatch }, credentials) {
  //   const data = await ApiService.post('users/login', credentials);
  //   console.log(data);
  //   JwtService.saveToken(data.token);
  //   dispatch(CHECK_AUTH, data.token);
  // },
  [LOGIN]({ dispatch }, credentials) {
    ApiService.post('users/login', credentials)
      .then((ok) => console.log('ok', ok))
      .catch((e) => console.log('e', e));
  },

  //     try {
  // }
  // catch (error) {
  //   const loginError = error.response
  //     ? error.response.data.error
  //     : { message: 'Error: Network Error!!!' };

  //   commit(SET_ERROR, loginError);
  //   throw new Error(loginError);

  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  async [REGISTER]({ commit }, credentials) {
    try {
      const { data } = await ApiService.post('user/signup', credentials);
      commit(SET_AUTH, data.data);
    } catch ({ response }) {
      commit(SET_ERROR, response.data.error);
      throw new Error(response.data.error);
    }
  },

  async [CHECK_AUTH]({ commit }, payload = null) {
    const token = payload || JwtService.getToken();

    if (token) {
      ApiService.setHeader(token);

      try {
        const { data } = await ApiService.get('users/me');
        console.log('data day nay:', data);

        // commit(SET_AUTH, { data.data, token });
      } catch (error) {
        const checkAuthError = error.response
          ? error.response.data.error
          : { message: error };

        ApiService.deleteHeader();
        commit(SET_ERROR, checkAuthError);
        throw new Error(error.response.data.error);
      }
    }
  },

  async [UPDATE_USER]({ commit }, updatedUser) {
    try {
      const { data } = await ApiService.patch('users/updateMe', updatedUser);
      commit(SET_AUTH, data.data);
      return data.data;
    } catch ({ response }) {
      commit(SET_ERROR, response.data.error);
      throw new Error(response.data.error);
    }
  },
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, payload) {
    console.log(payload);
    const { user, token } = payload;
    state.isAuthenticated = true;
    console.log(user);
    console.log(token);
    state.user = user;
    state.errors = {};
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;

    state.user = {};
    state.errors = {};

    JwtService.destroyToken();
    ApiService.deleteHeader();
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
