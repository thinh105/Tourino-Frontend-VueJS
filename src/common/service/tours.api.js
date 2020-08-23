import { apiService } from './api';

export default {
  query: (type, params) =>
    apiService.query('tours', {
      params,
    }),
  getTours() {
    return apiService.get('tours?limit=12');
  },
  getDestinations() {
    return apiService.get('tours/destinations');
  },
  getTravelStyle() {
    return apiService.get('tours/travelStyle');
  },
  getTour(slug) {
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
