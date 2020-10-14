// import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';

import errorResponseHandler from '@/common/service/errorHandler.api.js';
import { TRN_API_URL, TRN_TIME_OUT } from '@/common/config';

export const TrnApi = axios.create({
  baseURL: TRN_API_URL,
  timeout: TRN_TIME_OUT,
});

// apply interceptor on response
// turn it off by pass the {errorHandle: false}
TrnApi.interceptors.response.use((response) => response, errorResponseHandler);

// Vue.prototype.$http = TrnApi;

const queryStringify = (query) =>
  qs.stringify(query, {
    encode: false,
    indices: false,
    arrayFormat: 'comma',
    addQueryPrefix: true,
  });

export const apiService = {
  query: (resource) => TrnApi.get(resource),

  get: (resourse, query) => TrnApi.get(resourse + queryStringify(query)),

  post: (resource, params) => TrnApi.post(`${resource}`, params),

  update: (resource, slug, params) => TrnApi.put(`${resource}/${slug}`, params),

  put: (resource, params) => TrnApi.put(`${resource}`, params),

  delete: (resource) => TrnApi.delete(resource),
};

export const TagsService = {
  get() {
    return apiService.get('tags');
  },
};

export const CommentsService = {
  get(slug) {
    if (typeof slug !== 'string') {
      throw new Error(
        '[Tourino] CommentsService.get() article slug required to fetch comments'
      );
    }
    return apiService.get('articles', `${slug}/comments`);
  },

  post(slug, payload) {
    return apiService.post(`articles/${slug}/comments`, {
      comment: { body: payload },
    });
  },

  destroy(slug, commentId) {
    return apiService.delete(`articles/${slug}/comments/${commentId}`);
  },
};

export const FavoriteService = {
  add(slug) {
    return apiService.post(`articles/${slug}/favorite`);
  },
  remove(slug) {
    return apiService.delete(`articles/${slug}/favorite`);
  },
};
