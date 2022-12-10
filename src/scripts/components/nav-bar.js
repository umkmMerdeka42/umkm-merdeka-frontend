class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <header class="bg-white/90 shadow-nav backdrop-blur-sm fixed top-0 left-0 w-full flex items-center z-50">
        <div class = "w-full py-2 lg:py-1">
          <div class="flex items-center justify-between relative">
            <div class="px-4">
              <a href="#/home" class="font-bold text-xl lg:text-3xl py-1 flex items-center">
                <img src="images/logo/UMKM-Merdeka.png" alt="Logo UMKM Merdeka" class="w-10 lg:w-14 mr-2">
                <span class="mt-1 text-gray-900">UMKM MERDEKA</span>
              </a>
            </div>
            <div class="flex items-center px-4">
              <button id="hamburger" type="button" class="block absolute right-4 pt-3 lg:hidden">
                <span class = "hamburger-lines duration-200 ease-in-out origin-top-left"></span>
                <span class = "hamburger-lines duration-200 ease-in-out"></span>
                <span class = "hamburger-lines duration-200 ease-in-out origin-bottom-left"></span>
              </button>
              <nav id="drawer" class="scale-0 transition duration-200 ease-in-out absolute lg:block lg:scale-100 py-5 bg-white shadow-lg rounded-lg max-w-[200px] w-full right-3 top-16 lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                <ul class = "block lg:flex">
                  <li>
                    <a href="#/home" class="text-base text-gray-900 hover:text-secondary py-2 mx-6 flex transition duration-200 ease-in-out">Home</a>
                  </li>
                  <li>
                    <a href="#/katalog" class="text-base text-gray-900 hover:text-secondary py-2 mx-6 flex transition duration-200 ease-in-out">Katalog</a>
                  </li>
                  <li>
                    <a href="#/whistlist" class="text-base text-gray-900 hover:text-secondary py-2 mx-6 flex transition duration-200 ease-in-out">Wishlist Anda</a>
                  </li>
                  <li>
                    <a href="#/about-us" class="text-base text-gray-900 hover:text-secondary py-2 mx-6 flex transition duration-200 ease-in-out">Tentang Kami</a>
                  </li>
                  <li>
                    <div class="flex space-x-2 justify-center w-[130px] lg:w-full mt-0.5 ml-5 lg:ml-1 lg:mr-2">
                      <a href="https://umkm-merdeka-dashboard-apps.vercel.app/dashboard">
                        <button
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          class="rounded-md inline-block px-2 lg:px-2 py-2.5 bg-secondary text-white font-medium text-xs leading-tight shadow-md hover:bg-primary hover:shadow-lg focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition duration-150 ease-in-out"
                        >Jualan Sekarang
                        </button>
                    </a>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('navigation-bar', NavigationBar);
