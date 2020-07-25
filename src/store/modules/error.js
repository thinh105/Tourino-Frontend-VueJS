const state = () => ({
  errors: null,
});

const getters = {
  getErrors: (state) => state.errors,
};

const mutations = {
  updateError: (state, payload) => {
    state.errors = { message: payload.message, type: payload.type || 'error' };
  },
  clearError: (state) => {
    state.errors = null;
  },
};

const actions = {
  setError({ commit }, payload) {
    commit('updateError', payload);
    setTimeout(() => {
      commit('clearError');
    }, 4000);
  },
  clearError({ commit }) {
    commit('clearError');
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
