import API_ENDPOINT from '../global/api-endpoint';

class UmkmMerdekaSource {
  static async getAllProductsForGuest() {
    const response = await fetch(API_ENDPOINT.ALL_PRODUCT_FOR_GUEST);
    const responseJson = await response.json();
    return responseJson.data;
  }
}

export default UmkmMerdekaSource;
