class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <section
        class="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
      >
        <div
          class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
        ></div>
      
        <div
          class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div class="max-w-xl text-center sm:text-left">
            <div class="flex items-center">
              <img src="images/logo/UMKM-Merdeka-Brands.png" class="w-40">
              <h1 class="text-3xl sm:text-5xl text-gray-900">
                UMKM

                <strong class="block font-extrabold text-blue-900">
                  MERDEKA
                </strong>
              </h1>
            </div>
            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
              tenetur fuga ducimus numquam ea!
            </p>
      
            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                class="block w-full rounded bg-primary transition duration-200 ease-in-out px-12 py-3 text-sm font-medium text-white shadow hover:bg-secondary focus:outline-none focus:ring active:bg-tertiary sm:w-auto"
              >
                <button> Join Us</button>
              </a>
            </div>
          </div>
        </div>
    </section>  
    `;
  }
}

customElements.define('hero-section', HeroSection);
