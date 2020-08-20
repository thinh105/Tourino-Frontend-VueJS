import ToursService from '@/common/service/tours.api';
// import catchAsyncErrors from '@/common/catchAsyncErrors';
import { TagsService } from '../../common/service/api';
import { FETCH_TOURS, FETCH_FILTER_SELECTION } from '../type/actions';
import {
  FETCH_START,
  FETCH_END,
  SET_TAGS,
  UPDATE_ARTICLE_IN_LIST,
} from '../type/mutations';

// const catchAsyncErrors = (functionToHandle) => (...handledFunctionParams) => {
//   functionToHandle(...handledFunctionParams).catch((e) => {
//     console.log('catch cho vui!!!');
//   });
// };

const state = () => ({
  tours: [],
  tags: [],
  isLoading: true,
  destinationList: [],
  travelStyleList: [],
});

const getters = {
  tours: (state) => state.tours,
  isLoading: (state) => state.isLoading,
  tags: (state) => state.tags,
};

const actions = {
  // [FETCH_TOURS]({ commit }, params) {
  [FETCH_TOURS]: async ({ commit }) => {
    commit(FETCH_START);
    const result = await ToursService.query();

    if (result) {
      console.log('done: ', result);
      commit(FETCH_END, result.data.data.result);
    }
  },
  // [FETCH_FILTER_SELECTION]: catchAsyncErrors(async )

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
  [FETCH_END](state, data) {
    state.tours = data;
    state.isLoading = false;
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
