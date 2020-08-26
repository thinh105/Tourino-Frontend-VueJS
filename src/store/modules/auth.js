import authsService from '@/common/service/auth.api';
import JwtService from '@/common/jwt';
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from '@/store/type/mutations.js';
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CHECK_AUTH,
  UPDATE_USER,
} from '@/store/type/actions.js';

// import catchAsyncErrors from '@/common/catchAsyncErrors';

const state = {
  user: null,
};

const getters = {
  currentUser: (state) => state.user,
  isAuthenticated: (state) => !!state.user,
};

const actions = {
  // async [LOGIN]({ commit }, credentials) {
  //   const { data } = await authsService.login(credentials);
  //   if (data) commit(SET_AUTH, data.data);
  // },

  [LOGIN]: async ({ commit }, credentials) => {
    const response = await authsService.login(credentials);

    if (response) commit(SET_AUTH, response.data.data);
  },

  [LOGOUT]({ commit }) {
    commit(PURGE_AUTH);
  },

  async [REGISTER]({ commit }, newUser) {
    const { data } = await authsService.register(newUser);
    commit(SET_AUTH, data.data);
    //     try {
    // } catch ({ response }) {
    //   commit(SET_ERROR, response.data.error);
    //   throw new Error(response.data.error);
    // }
  },

  [CHECK_AUTH]: async ({ commit }) => {
    const token = JwtService.getToken();
    authsService.setHeader(token);

    if (token && !state.user) {
      const response = await authsService.checkAuth();
      if (response) {
        commit(SET_AUTH, { user: response.data.data, token });
      } else JwtService.destroyToken();
    }
  },
  /*    if (token && !state.user) {
      try {
      } catch (error) {
        const AuthError = error.response
          ? error.response.data.error
          : { message: error };

        console.log('loi check auth roi!!!!', AuthError);

        authsService.deleteHeader();

        commit(SET_ERROR, AuthError);
      }
      // throw new Error(error.response.data.error);
    } */
  // else {
  //   console.log('khong co token nen out nhe!!!');
  //   commit(PURGE_AUTH);
  // }
  // },

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
  [SET_AUTH](state, payload) {
    const { user, token } = payload;

    state.user = user;

    if (token) JwtService.saveToken(token);
    authsService.setHeader(token);
  },

  [PURGE_AUTH](state) {
    state.user = null;

    JwtService.destroyToken();
    authsService.deleteHeader();
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
