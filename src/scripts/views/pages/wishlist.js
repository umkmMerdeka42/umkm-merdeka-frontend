const Wishlist = {
  async render() {
    return /* html */`
      <h2>Wishlist Anda</h2>
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
