const ProductDetail = {
  async render() {
    return /* html */`
      <h2>Product Detail</h2>
    `;
  },

  async afterRender() {
    const navbar = document.querySelector('navigation-bar');
    navbar.classList.remove('hidden');

    const footerBar = document.querySelector('footer-bar');
    footerBar.classList.remove('hidden');
  },
};

export default ProductDetail;
