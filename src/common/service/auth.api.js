import { TrnApi, apiService } from './api';

export default {
  setHeader(token) {
    TrnApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  deleteHeader() {
    delete TrnApi.defaults.headers.common.Authorization;
  },
  login: (credentials) => apiService.post('users/login', credentials),
  // checkAuth: () => apiService.query('users/me', { errorHandle: false }),
  checkAuth: () => apiService.query('users/me'),
  register: (newUser) => apiService.post('users/signup', newUser),
};
