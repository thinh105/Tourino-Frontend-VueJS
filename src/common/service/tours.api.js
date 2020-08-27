import { apiService } from './api';

export default {
  query: (params) => apiService.query('tours', { params }),

  getTours: (query) => {
    const queryString = query ? `tours?limit=12&${query}` : 'tours?limit=12';

    return apiService.get(queryString);
  },

  getDestinations: () => apiService.get('tours/destinations'),
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
