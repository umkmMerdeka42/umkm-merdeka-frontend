import UrlParser from '../../routes/url-parser';
import products from '../../data/data-dummy.json';

const ProductDetail = {
  async render() {
    return /* html */`
      <detail-section></detail-section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { product } = products;
    const { id } = url;
    const detailElement = document.querySelector('detail-section');
    const idDetail = product[id - 1];
    const detailProduct = (productById) => {
      detailElement.products = productById;
    };

    detailProduct(idDetail);

    const navbar = document.querySelector('navigation-bar');
    navbar.classList.remove('hidden');

    const dashBoardDrawer = document.querySelector('dashboard-page');
    dashBoardDrawer.classList.add('hidden');

    const footerBar = document.querySelector('footer-bar');
    footerBar.classList.remove('hidden');
  },
};

export default ProductDetail;
