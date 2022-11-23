import Home from '../views/pages/home';
import ProductList from '../views/pages/product-list';
import ProductDetail from '../views/pages/product-detail';
import Wishlist from '../views/pages/wishlist';
import AboutUs from '../views/pages/about-us';
import Login from '../views/pages/login';

const routes = {
  '/': Home,
  '/home': Home,
  '/katalog': ProductList,
  '/katalog/:id': ProductDetail,
  '/about-us': AboutUs,
  '/whistlist': Wishlist,
  '/login': Login,
};

export default routes;
