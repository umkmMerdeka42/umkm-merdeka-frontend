class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <section class="-mt-[50px]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          class="svg absolute hidden lg:block animate__animated animate__fadeIn"
          style="height: 560px; width: 100%; z-index: -10; overflow: hidden"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="hsl(236, 32%, 99%)" offset="0%"></stop>
              <stop stop-color="hsl(217,88%, 93%)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-0)"
            d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
          ></path>
        </svg>

        <div class="px-6 py-12 lg:my-12 md:px-12 text-gray-800 text-center lg:text-left">
          <div class="container mx-auto xl:px-32">
            <div class="flex justify-center items-center flex-col-reverse lg:flex-row">
              <div class="md:w-[70%] lg:w-[50%] animate__animated animate__fadeInLeft">
                <h1 class="font-extrabold text-5xl md:text-6xl xl:text-7xl mb-3">UMKM MERDEKA</h1>
                <h2 class="text-secondary text-3xl lg:text-4xl font-bold mb-10">Usaha Mahasiswa Kecil Menengah Merdeka</h2>
                <a
                  href="https://umkm-merdeka-dashboard-apps.vercel.app/register"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  role="button"
                  class="inline-block px-7 py-3 mr-2 bg-secondary text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-primary hover:shadow-lg focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition duration-150 ease-in-out">
                    Join Bareng Kami!
                </a>
                <a
                  href="#/about-us"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  role="button"
                  class="inline-block mt-4 md:mt-0 px-7 py-3 bg-transparent text-secondary font-medium text-sm leading-snug uppercase rounded hover:text-primary transition-all duration-200 ease-in-out">
                    Tentang Kami
                </a>
              </div>
              <div class="my-3 lg:mt-5 lg:mr-0 lg:ml-16 flex justify-center">
                <img
                  src="images/logo/UMKM-Merdeka-Brands.png"
                  class="w-36 lg:w-96 animate__animated animate__zoomIn"
                  alt="UMKM Merdeka"
                />
              </div>
            </div>
          </div>
        </div>
    </section>
    `;
  }
}

customElements.define('hero-section', HeroSection);
