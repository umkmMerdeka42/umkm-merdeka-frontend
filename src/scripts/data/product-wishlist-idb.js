import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'uuid' });
  },
});

const ProductWishlistIdb = {
  async getProduct(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllProducts() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putProduct(product) {
    return (await dbPromise).put(OBJECT_STORE_NAME, product);
  },
  async deleteProduct(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default ProductWishlistIdb;
