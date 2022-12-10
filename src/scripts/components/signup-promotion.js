class SignupPromotion extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <div class="bg-promotion opacity-0 bg-gradient-to-br from-secondary to-[#6c71b4] py-60 md:bg-gradient-to-r">
        <div class="inner-bg-promotion opacity-0 container m-auto px-6 text-center md:px-12 lg:px-20">
          <h2 class="mb-8 text-4xl font-bold text-white md:text-4xl">
            Ayo Bergabung dengan UMKM Merdeka Sekarang!
          </h2>
          <a
            href="https://umkm-merdeka-dashboard-apps.vercel.app/register"
            class="relative flex h-12 w-full mx-auto items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
          >
            <span class="relative text-base font-semibold text-secondary"
              >Buat Akun Sekarang</span
            >
          </a>
        </div>
      </div>
    `;
  }
}

customElements.define('signup-promotion', SignupPromotion);
