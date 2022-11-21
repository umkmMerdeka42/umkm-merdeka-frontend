const Home = {
  async render() {
    return /* html */`
      <h2>Home</h2>
    `;
  },

  async afterRender() {
    const hero = document.querySelector('hero-section');
    hero.style.display = 'block';
  },
};

export default Home;
