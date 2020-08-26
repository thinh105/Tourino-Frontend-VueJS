import qs from 'qs';
import { apiService } from './api';

export default {
  query: (params) => apiService.query('tours', { params }),

  getTours: (query) => {
    const queryStringify = qs.stringify(query, {
      encode: false,
      indices: false,
    });

    const queryFilter = queryStringify
      ? `tours?limit=12&${queryStringify}`
      : 'tours?limit=12';

    return apiService.get(queryFilter);
    // return apiService.get('tours?limit=12', { params });
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
