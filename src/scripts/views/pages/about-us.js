const AboutUs = {
  async render() {
    return /* html */`
      <about-us></about-us>
    `;
  },

  async afterRender() {
    const readMore = document.querySelector('#read-more');
    readMore.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#tentang-kami').focus();
    });
  },
};

export default AboutUs;
