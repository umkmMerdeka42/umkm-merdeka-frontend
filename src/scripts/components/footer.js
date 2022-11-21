class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <footer class="w-full bg-gray-900 py-16 px-2">
        <div class="md:px-12 lg:px-28">
          <div class="container m-auto space-y-6 text-gray-300">
            <img src="images/logo/UMKM-Merdeka-second.png" alt="logo tailus" class="m-auto w-80" />
            <ul
              role="list"
              class="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8"
            >
              <li role="listitem"><a href="#" class="hover:text-gray-600 transition-all">Home</a></li>
              <li role="listitem"><a href="#" class="hover:text-gray-600 transition-all">Katalog</a></li>
              <li role="listitem"><a href="#" class="hover:text-gray-600 transition-all">Whislist Anda</a></li>
              <li role="listitem"><a href="#" class="hover:text-gray-600 transition-all">Tentang Kami</a></li>
            </ul>
            <div class="m-auto flex w-max items-center justify-between space-x-4">
              <a href="#" aria-label="github" class="hover:text-gray-600 transition-all text-3xl">
              <i class="fa-brands fa-square-github"></i>
              </a>
              <a href=" https://wa.me/6285695951121" target="_blank" rel="noopener noreferrer" aria-label="send wa" class="hover:text-gray-600 transition-all text-3xl">
              <i class="fa-brands fa-square-whatsapp"></i>
              </a>
              <a href="#" title="instagram" aria-label="facebook" class="hover:text-gray-600 transition-all text-3xl">
                <i class="fa-brands fa-square-instagram"></i>
              </a>
              <a href="#" title="email" aria-label="linkedin" class="hover:text-gray-600 transition-all text-3xl">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>

            <div class="text-center">
              <span class="text-sm tracking-wide"
                >Copyright © UMKM MERDEKA 2022 | All right reserved</span
              >
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
