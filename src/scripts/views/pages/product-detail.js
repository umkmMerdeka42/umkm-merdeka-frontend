import UrlParser from '../../routes/url-parser';
import products from '../../data/data-dummy.json';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createLikeButtonTemplate } from '../templates/template-creators';

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

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      product,
    });

    const navbar = document.querySelector('navigation-bar');
    navbar.classList.remove('hidden');

    const footerBar = document.querySelector('footer-bar');
    footerBar.classList.remove('hidden');

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
  },
};

export default ProductDetail;
