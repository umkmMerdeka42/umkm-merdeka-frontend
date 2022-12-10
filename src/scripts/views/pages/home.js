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

    const footerBar = document.querySelector('footer-bar');
    footerBar.classList.remove('hidden');

    window.addEventListener('scroll', () => {
      const bgPromotion = document.querySelector('.bg-promotion');
      const innerBGPromotion = document.querySelector('.inner-bg-promotion');

      if (window.pageYOffset >= 2700) {
        bgPromotion.classList.remove('opacity-0');
        bgPromotion.classList.add('animate__animated', 'animate__fadeIn');

        innerBGPromotion.classList.remove('opacity-0');
        innerBGPromotion.classList.add('animate__animated', 'animate__zoomInDown', 'animate__delay-.5s');
      }
    });
  },
};

export default Home;
