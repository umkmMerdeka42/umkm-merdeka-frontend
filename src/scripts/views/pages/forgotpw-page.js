const forgotPw = {
  async render() {
    return /* html */`
      <forgot-pw></forgot-pw>
    `;
  },

  async afterRender() {
    const navbar = document.querySelector('navigation-bar');
    navbar.classList.add('hidden');

    const footerBar = document.querySelector('footer-bar');
    footerBar.classList.add('hidden');
  },
};

export default forgotPw;
