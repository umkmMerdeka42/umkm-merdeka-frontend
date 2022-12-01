import UmkmMerdekaSource from '../../data/umkm-data-source';
import '../../components/card-home';

const Home = {
  async render() {
    return /* html */`
      <home-page></home-page>
    `;
  },

  async afterRender() {
    const productListElement = document.querySelector('card-home');

    const newProduct = (productList) => {
      productListElement.products = productList;
    };

    UmkmMerdekaSource.getAllProductsForGuest().then((data) => {
      newProduct(data);
    });

    const navbar = document.querySelector('navigation-bar');
    navbar.classList.remove('hidden');

    const dashBoardDrawer = document.querySelector('dashboard-page');
    dashBoardDrawer.classList.add('hidden');

    const footerBar = document.querySelector('footer-bar');
    footerBar.classList.remove('hidden');
  },
};

export default Home;
