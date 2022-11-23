const login = {
  async render() {
    return /* html */`
      <login-page></login-page>
    `;
  },

  async afterRender() {
    const navbar = document.querySelector('navigation-bar');
    navbar.classList.add('hidden');

    const footerBar = document.querySelector('footer-bar');
    footerBar.classList.add('hidden');
  },
};

export default login;
