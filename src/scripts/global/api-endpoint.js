import CONFIG from './config';

const API_ENDPOINT = {
  ALL_PRODUCT: `${CONFIG}products`,
  ALL_PRODUCT_FOR_GUEST: `${CONFIG}productsguest`,
  DETAIL_PRODUCT: (id) => `${CONFIG}products/${id}`,
  DETAIL_PRODUCT_FOR_GUEST: (id) => `${CONFIG}productsguest/${id}`,
  USERS: `${CONFIG}users`,
  LOGIN: `${CONFIG}login`,
  LOGOUT: `${CONFIG}logout`,
};

export default API_ENDPOINT;
