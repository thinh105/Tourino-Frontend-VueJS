import ToursService from '@/common/service/tours.api';

import {
  FETCH_TOURS,
  FETCH_DESTINATIONS,
  FETCH_TRAVELSTYLE,
} from '../type/actions';

import {
  FETCH_START,
  FETCH_END,
  SET_DESTINATIONS,
  SET_TRAVELSTYLE,
} from '../type/mutations';

const state = () => ({
  tours: [],
  total: undefined,
  returned: undefined,
  destinations: [],
  travelStyle: [],
  isToursLoading: true,
});

const getters = {
  tours: (state) => state.tours,
  total: (state) => state.total,
  returned: (state) => state.returned,

  travelStyle: (state) => state.travelStyle,
  destinations: (state) => state.destinations,

  isToursLoading: (state) => state.isToursLoading,
};

const actions = {
  // [FETCH_TOURS]({ commit }, params) {
  [FETCH_TOURS]: async ({ commit }, query) => {
    commit(FETCH_START);
    const response = await ToursService.getTours(query);
    if (response) commit(FETCH_END, response.data.data);
  },

  [FETCH_DESTINATIONS]: async ({ commit }) => {
    const response = await ToursService.getDestinations();

    if (response) commit(SET_DESTINATIONS, response.data.data);
  },

  [FETCH_TRAVELSTYLE]: async ({ commit }) => {
    const response = await ToursService.getTravelStyle();

    if (response) commit(SET_TRAVELSTYLE, response.data.data);
  },
};

const mutations = {
  [FETCH_START](state) {
    state.isToursLoading = true;
  },

  [FETCH_END](state, data) {
    state.tours = data.result;
    state.total = data.total;
    state.returned = data.returned;

    state.isToursLoading = false;
  },

  [SET_DESTINATIONS](state, destinations) {
    state.destinations = destinations;
  },
  [SET_TRAVELSTYLE](state, travelStyle) {
    state.travelStyle = travelStyle;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
