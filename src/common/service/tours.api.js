import { TRN_ITEMS_PER_PAGE, TRN_FILTER_MAX_PRICE } from '@/common/config';
import { apiService } from './api';

const backendQuerify = function (query) {
  let { destinations, travelStyle, price, rating, duration, sort, page } = {
    ...query,
  };

  if (price)
    price = {
      gte: +price[0] || undefined,
      lte: +price[1] !== TRN_FILTER_MAX_PRICE ? price[1] : undefined,
    };

  if (rating) rating = { gte: rating };

  if (duration)
    duration = {
      gte: +duration[0] || undefined,
      lte: +duration[1] || undefined,
    };

  if (destinations) destinations = { all: [...destinations] };
  if (travelStyle) travelStyle = { all: [...travelStyle] };

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

  getTours: (query) => apiService.get('tours', backendQuerify(query)),

  getDestinations: () => apiService.get('tours/destinations'),

  getTravelStyle: () => apiService.get('tours/travelStyle'),

  getTour(slug) {
    return apiService.get(`tours/slug/${slug}`);
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
