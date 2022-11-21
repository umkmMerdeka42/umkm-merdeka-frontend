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

    const readMore = document.querySelector('#read-more');
    readMore.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#tentang-kami').focus();
    });
  },
};

export default AboutUs;
