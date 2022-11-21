const AboutUs = {
  async render() {
    return /* html */`
      <h2>About Us</h2>
    `;
  },

  async afterRender() {
    const hero = document.querySelector('hero-section');
    hero.style.display = 'none';
  },
};

export default AboutUs;
