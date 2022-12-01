const Wishlist = {
  async render() {
    return /* html */ `
      <product-wishlist></product-wishlist>
    `;
  },

  async afterRender() {
    const navbar = document.querySelector('navigation-bar');
    navbar.classList.remove('hidden');

    const footerBar = document.querySelector('footer-bar');
    footerBar.classList.remove('hidden');
  },
};

export default Wishlist;
