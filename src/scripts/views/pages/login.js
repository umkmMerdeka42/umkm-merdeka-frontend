import '../../components/login-page';

const login = {
  async render() {
    return /* html */`
      <login-page></login-page>
    `;
  },

  async afterRender() {
    const hero = document.querySelector('hero-section');
    hero.style.display = 'none';

    const navbar = document.querySelector('navigation-bar');
    navbar.style.display = 'none';

    const footerBar = document.querySelector('footer-bar');
    footerBar.style.display = 'none';
  },
  
};

export default login;
