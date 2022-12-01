const AboutUs = {
  async render() {
    return /* html */`
      <about-us></about-us>
    `;
  },

  async afterRender() {
    const navbar = document.querySelector('navigation-bar');
    navbar.classList.remove('hidden');

    const dashBoardDrawer = document.querySelector('dashboard-page');
    dashBoardDrawer.classList.add('hidden');

    const footerBar = document.querySelector('footer-bar');
    footerBar.classList.remove('hidden');

    const readMore = document.querySelector('#read-more');
    readMore.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#tentang-kami').focus();
    });

    window.addEventListener('scroll', () => {
      const groupImage1 = document.querySelector('.group-image-1');
      const aboutHeading = document.querySelector('#tentang-kami');
      const paragraf1 = document.querySelector('.aboutParagraf');
      const paragraf2 = document.querySelector('.aboutParagraf2');
      const visi = document.querySelector('.visi');
      const misi = document.querySelector('.misi');
      const image1 = document.querySelector('.image1');
      const image2 = document.querySelector('.image2');
      const bgQuotes = document.querySelector('.bg-quotes');
      const quotes = document.querySelector('.quotes');

      if (window.pageYOffset >= 370) {
        groupImage1.classList.remove('opacity-0');
        groupImage1.classList.add('animate__animated', 'animate__fadeInDown');

        aboutHeading.classList.remove('opacity-0');
        aboutHeading.classList.add('animate__animated', 'animate__slideInRight', 'animate__slow');

        paragraf1.classList.remove('opacity-0');
        paragraf1.classList.add('animate__animated', 'animate__slideInRight', 'animate__delay-1s', 'animate__faster');

        paragraf2.classList.remove('opacity-0');
        paragraf2.classList.add('animate__animated', 'animate__slideInRight', 'animate__delay-1s');
      }

      if (window.pageYOffset >= 1300) {
        visi.classList.remove('opacity-0');
        visi.classList.add('animate__animated', 'animate__slideInLeft');

        misi.classList.remove('opacity-0');
        misi.classList.add('animate__animated', 'animate__slideInLeft', 'animate__slow');

        image1.classList.remove('opacity-0');
        image1.classList.add('animate__animated', 'animate__fadeInDown', 'animate__slow');

        image2.classList.remove('opacity-0');
        image2.classList.add('animate__animated', 'animate__fadeInDown', 'animate__slower');
      }

      if (window.pageYOffset >= 1800) {
        bgQuotes.classList.remove('opacity-0');
        bgQuotes.classList.add('animate__animated', 'animate__fadeIn', 'animate__slow');

        quotes.classList.remove('opacity-0');
        quotes.classList.add('animate__animated', 'animate__zoomIn', 'animate__slow');
      }
    });
  },
};

export default AboutUs;
