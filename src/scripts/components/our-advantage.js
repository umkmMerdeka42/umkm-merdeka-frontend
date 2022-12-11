class OurAdvantage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
    <div class="py-16">
      <div class="mb-5 md:mb-12 space-y-2 text-center">
        <h2 class="text-3xl mx-6 md:mx-0 font-bold text-gray-800 md:text-4xl">Keunggulan Kami</h2>
      </div>
      <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
        <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
          <div class="border border-gray-100 rounded-3xl bg-white px-8 pt-12 shadow-2xl shadow-gray-600/10 sm:px-12 lg:px-8">
            <div class="mb-12 space-y-4">
              <h3 class="text-2xl font-semibold text-gray-800">Mudah Dipakai</h3>
              <p class="mb-6 text-gray-600">
              Aplikasi sangat mudah digunakan dan tidak perlu repot menginstal terlebih dahulu karena cukup menggunakan browser.
              </p>
            </div>
            <img
              src="images/picture/ilustration1.png"
              class="ml-auto w-2/3 hover:animate-bounce"
              alt="illustration"
              loading="lazy"
              width="900"
              height="600"
            />
          </div>
          <div class="border border-gray-100 rounded-3xl bg-white px-8 py-12 shadow-2xl shadow-gray-600/10 sm:px-12 lg:px-8">
            <div class="mb-12 space-y-4">
              <h3 class="text-2xl font-semibold text-gray-800">Progressive Web Apps</h3>
              <p class="mb-6 text-gray-600">
                Memiliki sifat seperti aplikasi native, dapat di install pada perangkat PC ataupun Mobile, responsive, dan juga terasa seperti sifat aplikasi pada umumnya.
              </p>
            </div>
            <img
              src="images/picture/ilustration2.png"
              class="ml-auto w-2/3 hover:animate-bounce"
              alt="illustration"
              loading="lazy"
              width="900"
              height="600"
            />
          </div>
          <div class="border border-gray-100 rounded-3xl bg-white px-8 py-12 shadow-2xl shadow-gray-600/10 sm:px-12 lg:px-8">
            <div class="mb-12 space-y-4">
              <h3 class="text-2xl font-semibold text-gray-800">Online Presence</h3>
              <p class="mb-6 text-gray-600">
                Kemudahan dalam promosi dan pemasaran produk usaha berdasarkan ketersediaan informasi bisnis online yang dapat ditemukan disekitar kampus anda.
              </p>
            </div>
            <img
              src="images/picture/ilustration3.png"
              class="ml-auto w-2/3 hover:animate-bounce"
              alt="illustration"
              loading="lazy"
              width="900"
              height="600"
            />
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('advantage-card', OurAdvantage);
