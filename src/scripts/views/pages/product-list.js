import products from '../../data/data-dummy.json';

const ProductList = {
  async render() {
    return /* html */ `
      <list-section></list-section>
    `;
  },

  async afterRender() {
    const { product } = products;
    const productListElement = document.querySelector('list-section');

    const allProduct = (productList) => {
      productListElement.products = productList;
    };

    allProduct(product);

    const navbar = document.querySelector('navigation-bar');
    navbar.classList.remove('hidden');

    const footerBar = document.querySelector('footer-bar');
    footerBar.classList.remove('hidden');
  },
};

export default ProductList;
