import store from '@/store';
import { SET_ERROR } from '@/store/type/actions';

export default function errorResponseHandler(error) {
  // check for errorHandle config -- allow to turn off error handling
  if (
    Object.prototype.hasOwnProperty.call(error.config, 'errorHandle') &&
    error.config.errorHandle === false
  ) {
    // console.log('turn off Api Error Handler!! ');
    return Promise.reject(error);
  }

  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    // console.log('error.response!!!');
    // console.log(error.response.data);

    store.dispatch(SET_ERROR, {
      message: `[Tourino]: ${error.response.data.message}`,
    });
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js

    // console.log('error.request!!!');
    // console.log(error.request);

    store.dispatch(SET_ERROR, {
      message: '[API Server]: Network Error! Please try again later!',
    });
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
}
