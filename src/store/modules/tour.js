import axios from 'axios';

export const state = () => ({
  tours: [],
});

export const getters = {
  tours: (state) => state.tours,
  tour,
};

export const mutations = {
  UPDATE_PRODUCTS: (state, payload) => {
    state.value = payload;
  },
};

export const actions = {
  async getTours({ commit }) {
    const response = await axios.get('/api/products');
    commit('UPDATE_PRODUCTS', response.data);
  },
  updateActionProduct({ commit }) {
    commit('UPDATE_PRODUCT', payload);
  },
};
