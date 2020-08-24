import ToursService from '@/common/service/tours.api';
// import catchAsyncErrors from '@/common/catchAsyncErrors';
import { TagsService } from '../../common/service/api';

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

// const catchAsyncErrors = (functionToHandle) => (...handledFunctionParams) => {
//   functionToHandle(...handledFunctionParams).catch((e) => {
//     console.log('catch cho vui!!!');
//   });
// };

const state = () => ({
  tours: [],
  destinations: [],
  travelStyle: [],

  isLoading: true,
});

const getters = {
  tours: (state) => state.tours,
  travelStyle: (state) => state.travelStyle,
  destinations: (state) => state.destinations,

  isLoading: (state) => state.isLoading,
};

const actions = {
  // [FETCH_TOURS]({ commit }, params) {
  [FETCH_TOURS]: async ({ commit }) => {
    commit(FETCH_START);
    const result = await ToursService.getTours();

    if (result) commit(FETCH_END, result.data.data.result);
  },

  [FETCH_DESTINATIONS]: async ({ commit }) => {
    const result = await ToursService.getDestinations();

    if (result) commit(SET_DESTINATIONS, result.data.data);
  },

  [FETCH_TRAVELSTYLE]: async ({ commit }) => {
    const result = await ToursService.getTravelStyle();

    if (result) commit(SET_TRAVELSTYLE, result.data.data);
  },

  // const payload = {
  //   tours: ,
  //   destinations: destinationsResult.data.data,
  //   travelStyle: travelStyleResult.data.data,
  // };

  // ToursService.getDestinations(),
  // ToursService.getTravelStyle(),

  // [FETCH_FILTER_SELECTION]: async,

  // [FETCH_TAGS]({ commit }) {
  //   return TagsService.get()
  //     .then(({ data }) => {
  //       commit(SET_TAGS, data.tags);
  //     })
  //     .catch((error) => {
  //       throw new Error(error);
  //     });
  // },
};

const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },

  [FETCH_END](state, tours) {
    state.tours = tours;

    state.isLoading = false;
  },

  [SET_DESTINATIONS](state, destinations) {
    state.destinations = destinations;
  },
  [SET_TRAVELSTYLE](state, travelStyle) {
    state.travelStyle = travelStyle;
  },
  // [SET_TAGS](state, tags) {
  //   state.tags = tags;
  // },
  // [UPDATE_ARTICLE_IN_LIST](state, data) {
  //   state.articles = state.articles.map((article) => {
  //     if (article.slug !== data.slug) {
  //       return article;
  //     }
  //     // We could just return data, but it seems dangerous to
  //     // mix the results of different api calls, so we
  //     // protect ourselves by copying the information.
  //     article.favorited = data.favorited;
  //     article.favoritesCount = data.favoritesCount;
  //     return article;
  //   });
  // },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
