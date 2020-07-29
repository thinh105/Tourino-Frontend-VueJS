import { apiService } from './api';

export default {
  query: (type, params) =>
    apiService.query('tours', {
      params,
    }),
  get(slug) {
    return apiService.get('tours', slug);
  },
  create(params) {
    return apiService.post('tours', { tour: params });
  },
  update(slug, params) {
    return apiService.update('tours', slug, { tour: params });
  },
  destroy(slug) {
    return apiService.delete(`tours/${slug}`);
  },
};
