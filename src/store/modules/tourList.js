import { TagsService, ToursService } from '../../common/service/api';
import { FETCH_TOURS, FETCH_TAGS } from '../type/actions';
import {
  FETCH_START,
  FETCH_END,
  SET_TAGS,
  UPDATE_ARTICLE_IN_LIST,
} from '../type/mutations';

export const state = () => ({
  tours: [],
  tags: [],
  isLoading: true,
});

export const getters = {
  tours: (state) => state.tours,
  isLoading: (state) => state.isLoading,
  tags: (state) => state.tags,
};

export const actions = {
  // [FETCH_TOURS]({ commit }, params) {
  [FETCH_TOURS]({ commit }) {
    commit(FETCH_START);
    // return ToursService.query(params.filters)
    return ToursService.query()
      .then(({ data }) => {
        commit(FETCH_END, data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
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

export const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },
  [FETCH_END](state, { data }) {
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
