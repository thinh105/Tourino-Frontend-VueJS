import { TRN_ITEMS_PER_PAGE, TRN_FILTER_MAX_PRICE } from '@/common/config';
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

    // let { destination, travelStyle, price } = { ...query };

    // convert from `tour?destination=Hue,Hanoi` to
    // `tour?destination[all]=Hue,Hanoi` to fit with backend

    Object.keys(apiQuery).forEach((item) => {
      if (item === 'price') {
        apiQuery.price = {
          gte: +apiQuery.price[0] || undefined,
          lte:
            +apiQuery.price[1] !== TRN_FILTER_MAX_PRICE
              ? apiQuery.price[1]
              : undefined,
        };
      } else if (item === 'rating') {
        apiQuery.rating = { gte: apiQuery.rating };
      } else if (item === 'duration') {
        apiQuery.duration = {
          gte: +apiQuery.duration[0] || undefined,
          lte: +apiQuery.duration[1] || undefined,
        };
      } else apiQuery[item] = { all: [...apiQuery[item]] };
    });

    apiQuery.limit = TRN_ITEMS_PER_PAGE;

    return apiService.get('tours', apiQuery);
    // return apiService.get('tours', { destination, travelStyle, price });
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
