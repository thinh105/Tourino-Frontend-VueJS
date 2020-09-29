import { TRN_ITEMS_PER_PAGE, TRN_FILTER_MAX_PRICE } from '@/common/config';
import { apiService } from './api';

const convertToBackendQuery = function (query) {
  let { destinations, travelStyle, price, rating, duration, sort, page } = {
    ...query,
  };

  if (price)
    price = {
      gte: +price[0] || undefined,
      lte: +price[1] !== TRN_FILTER_MAX_PRICE ? price[1] : undefined,
    };

  rating = rating ? { gte: rating } : undefined;

  if (duration) {
    duration = {
      gte: +duration[0] || undefined,
      lte: +duration[1] || undefined,
    };
  }

  destinations = destinations ? { all: [...destinations] } : undefined;

  travelStyle = travelStyle ? { all: [...travelStyle] } : undefined;
  const limit = TRN_ITEMS_PER_PAGE;
  return {
    destinations,
    travelStyle,
    price,
    rating,
    duration,
    sort,
    limit,
    page,
  };
};

export default {
  query: (params) => apiService.query('tours', { params }),

  getTours: (query) => {
    const backendQuery = convertToBackendQuery(query);

    return apiService.get('tours', backendQuery);
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
