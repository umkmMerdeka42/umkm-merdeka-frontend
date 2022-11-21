import '../../components/about-us';

const AboutUs = {
  async render() {
    return /* html */`
      <about-us></about-us>
    `;
  },

  async afterRender() {
    const hero = document.querySelector('hero-section');
    hero.style.display = 'none';
  },
};

export default AboutUs;
