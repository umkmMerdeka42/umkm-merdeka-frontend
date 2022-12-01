import CONFIG from './config';

const API_ENDPOINT = {
  ALL_PRODUCT: `${CONFIG.BASE_URL}products`,
  ALL_PRODUCT_FOR_GUEST: `${CONFIG.BASE_URL}productsguest`,
  DETAIL_PRODUCT: (id) => `${CONFIG.BASE_URL}products/${id}`,
  DETAIL_PRODUCT_FOR_GUEST: (id) => `${CONFIG.BASE_URL}productsguest/${id}`,
  USERS: `${CONFIG.BASE_URL}users`,
  LOGIN: `${CONFIG.BASE_URL}login`,
  LOGOUT: `${CONFIG.BASE_URL}logout`,
};

export default API_ENDPOINT;
