const ProductList = {
  async render() {
    return /* html */`
      <h2>Product List</h2>
    `;
  },

  async afterRender() {
    const hero = document.querySelector('hero-section');
    hero.style.display = 'none';
  },
};

export default ProductList;
