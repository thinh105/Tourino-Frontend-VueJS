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
          gt: apiQuery.price[0],
          lt: apiQuery.price[1],
        };
      } else apiQuery[item] = { all: [...apiQuery[item]] };

      // {
      //   apiQuery[item] = Array.isArray(apiQuery[item])
      //     ? { all: [...apiQuery[item]] }
      //     : { all: apiQuery[item] };
      // }
    });

    // destination = Array.isArray(destination)
    //   ? { all: [...destination] }
    //   : { all: destination };

    // travelStyle = Array.isArray(travelStyle)
    //   ? { all: [...travelStyle] }
    //   : { all: travelStyle };

    // price = {
    //   gt: price[0],
    //   lt: price[1],
    // };

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
