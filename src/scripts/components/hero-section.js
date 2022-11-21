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
            <h1 class="text-3xl sm:text-5xl text-gray-900">
              UMKM

              <strong class="block font-extrabold text-blue-900">
                MERDEKA
              </strong>
            </h1>
            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
              tenetur fuga ducimus numquam ea!
            </p>
      
            <div class="mt-6 flex flex-wrap gap-4 text-center">
              <a href="#" class="w-full sm:w-auto">
                <button data-mdb-ripple="true" data-mdb-ripple-color="light" class="w-full px-6 py-3 bg-blue-900 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-primary hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-tertiary active:shadow-lg transition duration-150 ease-in-out"> Join Us</button>
              </a>
            </div>
          </div>
        </div>
    </section>  
    `;
  }
}

customElements.define('hero-section', HeroSection);
