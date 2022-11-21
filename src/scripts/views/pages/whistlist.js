const Whistlist = {
  async render() {
    return /* html */`
      <h2>Whistlist</h2>
    `;
  },

  async afterRender() {
    const hero = document.querySelector('hero-section');
    hero.style.display = 'none';
  },
};

export default Whistlist;
