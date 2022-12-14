class FaqSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
    <div class="container lg:my-16 px-6 mx-auto">
      <section class="mb-14 lg:mb-0 text-gray-800">
        <div class="container mx-auto xl:px-32 text-center lg:text-left">
          <div class="grid lg:grid-cols-2 items-center">
            <div>
              <div
                class="block rounded-xl shadow-lg bg-white/70 px-6 py-12 lg:py-6 xl:py-12 md:px-12 lg:-mr-14 backdrop-blur-xl"
              >
              <h3 class="text-2xl font-bold mb-3">Kenapa Sih Harus UMKM Merdeka ?</h3>
              <h5 class="text-lg text-blue-600 font-bold mb-12 lg:mb-10 xl:mb-12">Kamu Nanyeaa ?, Yuk Aku Kasih Tau...</h5>

              <p class="font-bold mb-4">Min, keuntungan untuk Mahasiswa kalau join UMKM Merdeka apa ya ?</p>
              <p class="text-gra-500 mb-6">
                Dari sisi pelaku usaha (khususnya mahasiswa), Website ini membantu untuk mempromosikan produk usahanya baik barang atau jasa di lingkungan kampusnya.
              </p>

              <p class="font-bold mb-4">Seberapa besar peluang keuntungan Mahasiswa jika berjualan di Website Kampus Merdeka Min ?</p>
              <p class="text-gra-500 mb-6">
              Karena website ini menyediakan daftar katalog produk-produk dari mahasiswa yang memiliki usaha di masing-masing universitas yang terdaftar. Sehingga konsumen bisa dengan mudah menemukan produk barang atau jasa yang diinginkan disekitar kampusnya.
              
              </p>
              </div>
            </div>

            <div>
              <img
                src="images/picture/faq-picture.png"
                class="w-full rounded-lg shadow-lg hidden lg:block"
                alt="kenapa harus umkm merdeka"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    `;
  }
}

customElements.define('faq-section', FaqSection);
