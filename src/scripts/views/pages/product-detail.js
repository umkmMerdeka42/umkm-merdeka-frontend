const ProductDetail = {
  async render() {
    return /* html */`
      <h2>Product Detail</h2>
    `;
  },

  async afterRender() {
    const hero = document.querySelector('hero-section');
    hero.style.display = 'none';
  },
};

export default ProductDetail;
