import { apiService } from './api';

export default {
  query: (params) => apiService.query('tours', { params }),

  /*
  getTours: (query) => {
    // const queryString = query ? `tours?limit=12&${query}` : 'tours?limit=12';

    return apiService.get(`tours${query}`);
  },
*/

  getTours: (query) => {
    const apiQuery = { ...query };

    // convert from `tour?destination=Hue,Hanoi` to
    // `tour?destination[all]=Hue,Hanoi` to fit with backend
    Object.keys(apiQuery).forEach((item) => {
      apiQuery[item] = Array.isArray(apiQuery[item])
        ? { all: [...apiQuery[item]] }
        : { all: apiQuery[item] };
    });

    return apiService.get('tours', apiQuery);
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
