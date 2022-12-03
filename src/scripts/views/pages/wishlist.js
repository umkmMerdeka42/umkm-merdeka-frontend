import ProductWishlistIdb from '../../data/product-wishlist-idb';
import '../../components/list-section';

const Wishlist = {
  async render() {
    return /* html */ `
      <list-section></list-section>
    `;
  },

  async afterRender() {
    const productListElement = document.querySelector('list-section');

    const allProduct = (productList) => {
      productListElement.products = productList;
    };

    ProductWishlistIdb.getAllProducts().then((data) => {
      allProduct(data);
    });

    const navbar = document.querySelector('navigation-bar');
    navbar.classList.remove('hidden');

    const dashBoardDrawer = document.querySelector('dashboard-page');
    dashBoardDrawer.classList.add('hidden');

    const footerBar = document.querySelector('footer-bar');
    footerBar.classList.remove('hidden');
  },
};

export default Wishlist;
