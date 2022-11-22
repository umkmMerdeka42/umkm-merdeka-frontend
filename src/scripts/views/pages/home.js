const Home = {
  async render() {
    return /* html */`
      <home-page></home-page>
    `;
  },

  async afterRender() {
    const hero = document.querySelector('hero-section');
    hero.style.display = 'block';
  },
};

export default Home;
