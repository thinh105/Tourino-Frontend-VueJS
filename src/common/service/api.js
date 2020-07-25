import Vue from 'vue';
import axios from 'axios';

import JwtService from '@/common/service/jwt';
import errorResponseHandler from '@/common/service/errorHandler';
import { TRN_API_URL, TRN_TIME_OUT } from '@/common/config';

const TrnApi = axios.create({
  baseURL: TRN_API_URL,
  timeout: TRN_TIME_OUT,
});

// apply interceptor on response
TrnApi.interceptors.response.use((response) => response, errorResponseHandler);

Vue.prototype.$http = TrnApi;

const ApiService = {
  init() {
    // use(VueAxios, axios);
    // Vue.axios.defaults.baseURL = API_URL;
  },

  setHeader(token) {
    TrnApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  deleteHeader() {
    delete TrnApi.defaults.headers.common.Authorization;
  },

  query(resource, params) {
    return TrnApi.get(resource, params).catch((error) => {
      throw new Error(`[Tourino] ApiService ${error}`);
    });
  },

  get(resource, slug = '') {
    return TrnApi.get(`${resource}/${slug}`).catch((error) => {
      throw new Error(`[Tourino] ApiService ${error}`);
    });
  },

  post(resource, params) {
    return TrnApi.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return TrnApi.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return TrnApi.put(`${resource}`, params);
  },

  delete(resource) {
    return TrnApi.delete(resource).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
};

export default ApiService;

export const TagsService = {
  get() {
    return ApiService.get('tags');
  },
};

export const ToursService = {
  query: (type, params) =>
    ApiService.query('tours', {
      params,
    }),
  get(slug) {
    return ApiService.get('tours', slug);
  },
  create(params) {
    return ApiService.post('tours', { tour: params });
  },
  update(slug, params) {
    return ApiService.update('tours', slug, { tour: params });
  },
  destroy(slug) {
    return ApiService.delete(`tours/${slug}`);
  },
};

export const CommentsService = {
  get(slug) {
    if (typeof slug !== 'string') {
      throw new Error(
        '[Tourino] CommentsService.get() article slug required to fetch comments'
      );
    }
    return ApiService.get('articles', `${slug}/comments`);
  },

  post(slug, payload) {
    return ApiService.post(`articles/${slug}/comments`, {
      comment: { body: payload },
    });
  },

  destroy(slug, commentId) {
    return ApiService.delete(`articles/${slug}/comments/${commentId}`);
  },
};

export const FavoriteService = {
  add(slug) {
    return ApiService.post(`articles/${slug}/favorite`);
  },
  remove(slug) {
    return ApiService.delete(`articles/${slug}/favorite`);
  },
};
