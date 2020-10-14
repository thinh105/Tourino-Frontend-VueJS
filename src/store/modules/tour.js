import ToursService from '@/common/service/tours.api';

import { FETCH_TOUR, FETCH_REVIEWS } from '../type/actions';
import { SET_TOUR } from '../type/mutations';

const state = () => ({
  tour: [],
  reviews: [],
});

const getters = {
  tour: (state) => state.tour,
  reviews: (state) => state.reviews,
};

const actions = {
  [FETCH_TOUR]: async ({ commit }, slug) => {
    const response = await ToursService.getTour(slug);
    if (response) commit(SET_TOUR, response.data.data);
  },
};

const mutations = {
  [SET_TOUR](state, tour) {
    state.tour = tour;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
