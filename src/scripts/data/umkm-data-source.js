import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

axios.defaults.withCredentials = true;

class UmkmMerdekaSource {
  static async getAllProductsForGuest() {
    const response = await fetch(API_ENDPOINT.ALL_PRODUCT_FOR_GUEST);
    const responseJson = await response.json();
    const product = await responseJson.data;
    return product;
  }

  static async getDetailAllProductsForGuest(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_PRODUCT_FOR_GUEST(id));
    return response.json();
  }
}

export default UmkmMerdekaSource;
