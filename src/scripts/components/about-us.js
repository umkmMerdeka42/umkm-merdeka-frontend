import DATA from '../../public/TEAM.json';

class AboutUs extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const { teams } = DATA;

    const cardTeamProfile = (data) => {
      const {
        name, photo, role, instagram, linkedin, github,
      } = data;

      return /* html */ `
        <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-secondary">
          <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="${photo}" alt="${name}">
          <h1 class="mt-4 text-xl text-center font-semibold text-gray-700 capitalize group-hover:text-white">${name}</h1>
          <p class="mt-2 text-gray-500 capitalize group-hover:text-gray-300">${role}</p>

          <div class="flex mt-3 -mx-2">
            <a href="${instagram}" target="_blank" class="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white" aria-label="Instagram">
              <i class="fa-brands fa-square-instagram text-3xl"></i>
            </a>

            <a href="${linkedin}" target="_blank" class="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white" aria-label="LinkedIn">
              <i class="fa-brands fa-linkedin text-3xl"></i>
            </a>

            <a href="${github}" target="_blank" class="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white" aria-label="Github">
              <i class="fa-brands fa-square-github text-3xl"></i>
            </a>
          </div>
        </div>
      `;
    };

    this.innerHTML = /* html */ `
      <section class="w-full bg-gradient-to-r from-secondary to-[#6c71b4]">
        <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div class="flex w-full mx-auto text-left">
            <div class="relative inline-flex items-center mx-auto align-middle">
              <div class="text-center">
                <h1 class="animate__animated animate__zoomIn max-w-5xl text-2xl font-bold leading-none tracking-tighter text-white md:text-3xl lg:text-4xl lg:max-w-7xl">
                  Tentang UMKM Merdeka<br class="hidden lg:block">
                </h1>
                <p class="animate__animated animate__zoomIn max-w-xl mx-auto mt-8 text-base leading-relaxed text-white">Telah dipercaya oleh puluhan mitra mahasiswa di tiga universitas di Indonesia. UMKM Merdeka senantiasa berkomitmen untuk membantu membuat bisnis Anda semakin berkembang. Bergabunglah dan temukan pengalaman mengesankan bersama kami.</p>
                <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                  <div class="animate__animated animate__fadeInUp mt-3 rounded-lg sm:mt-0">
                    <button id="read-more" type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" class="items-center block px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-red-500 lg:px-10 rounded-xl hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Lihat Selengkapnya</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article class="md:p-[100px] p-[60px] ">
        <section class="overflow-hidden">
          <div class="container mx-auto">
            <div class="-mx-4 flex flex-wrap items-center justify-between">
              <div class="w-full px-4 lg:w-6/12">
                <div class="group-image-1 opacity-0 -mx-3 flex items-center sm:-mx-4">
                  <div class="w-full px-3 sm:px-4 xl:w-1/2">
                    <div class="py-3 sm:py-4">
                      <img
                      src="images/picture/ubl.jpeg"
                      alt=""
                      class="w-full rounded-2xl"
                        />
                    </div>
                    <div class="py-3 sm:py-4">
                      <img
                      src="images/picture/umri.jpeg"
                      alt=""
                      class="w-full rounded-2xl"
                      />
                    </div>
                  </div>
                  <div class="w-full px-3 sm:px-4 xl:w-1/2">
                    <div class="relative z-10 my-4">
                      <img
                      src="images/picture/unila.jpeg"
                      alt=""
                      class="w-full rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full px-4 lg:w-5/12 xl:w-5/12">
                <div class="mt-10 lg:mt-0">
                  <h2 id="tentang-kami" tabindex="0" class="text-dark opacity-0 mb-8 text-3xl font-bold sm:text-4xl">
                  Tentang Kami
                  </h2>
                  <p class="aboutParagraf text-body-color mb-8 text-base opacity-0 text-gray-500">
                  Berdiri sejak tahun 2022, UMKM Merdeka merupakan platform promosi barang maupun jasa berbasis website yang ditujukan 
                  untuk para mahasiswa. Kami selalu berusaha membuat inovasi baru sebagai usaha untuk menyelesaikan permasalahan sekitar 
                  dengan harapan dapat bermanfaat bagi banyak orang.
                  </p>
                  <p class="aboutParagraf2 text-body-color mb-12 text-base opacity-0 text-gray-500">
                  Tujuan UMKM Merdeka adalah menyediakan wadah bagi para mahasiswa yang memiliki usaha untuk mempromosikan produknya secara cepat 
                  dan efisien sehingga dapat menjangkau lebih banyak konsumen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="max-w-screen-2xl mx-auto">
          <div class="flex flex-wrap justify-between ">
            <div class="w-full lg:w-1/2 pr-16 flex flex-col justify-center lg:pt-48 lg:pb-24 mb-6 sm:mb-12 lg:mb-0">
              <div class="visi opacity-0">
                <h2 class="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                  Visi
                </h2>
                <p class="text-body-color mb-8 text-base text-gray-500">
                  Para mahasiswa di Indonesia memiliki semangat wirausaha yang tinggi sebagai bekal di masa mendatang.
                </p>
              </div>
              <div class="misi opacity-0">
                <h2 class="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                  Misi
                </h2>
                <p class="text-body-color mb-8 text-base text-gray-500">
                  Membantu mahasiswa di Indonesia untuk meningkatkan jiwa kewirausahaan dengan memberikan mereka wadah untuk belajar dan berkembang.
                </p>
              </div>
            </div>
      
            <div class="w-full lg:w-1/2 flex mb-12 md:mb-16">
              <div class="image1 opacity-0 bg-gray-100 rounded-2xl shadow-lg overflow-hidden relative z-10 top-12 md:top-16 left-12 md:left-16 -ml-12 lg:ml-0">
                <img src="images/picture/anti-rungkad.jpeg" loading="lazy" alt="Photo by Manny Moreno" class="w-full h-full object-cover object-center" loading="lazy" alt="Photo by Kaung Htet" class="w-full h-full object-cover object-center" />
              </div>
              <div class="image2 opacity-0 bg-gray-100 rounded-2xl shadow-lg overflow-hidden">
                <img src="images/picture/foto-kite.jpg" loading="lazy" alt="Photo by Manny Moreno" class="w-full h-full object-cover object-center" loading="lazy" alt="Photo by Kaung Htet" class="w-full h-full object-cover object-center"/>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-quotes opacity-0 bg-purple-50 lg:mt-[100px] lg:mx-[-100px]">
          <div class="quotes opacity-0 px-4 py-32 mx-auto max-w-7xl">
            <div class="grid items-center w-full grid-cols-1 gap-10 mx-auto lg:grid-cols-8 lg:gap-4 xl:w-3/4">
              <div class="w-40 h-40 col-span-1 lg:col-span-2">
                <img src="https://cdn.fortuneidn.com/post/20220513/sandiaga-min-a04cca766a885687e33bc6b114230ee9-9a00de06227b2c4c5db2fe6bfdc3362e_1050x700.jpg" class="object-cover w-full h-full bg-center rounded-md shadow-xl" alt="Kutty" />
              </div>
              <div class="col-span-1 lg:col-span-6">
                <h1 class="mb-3 text-xl font-bold text-blue-600 md:leading-tight md:text-4xl"> 
                  “Entrepreneurship itu bukan profesi, melainkan <span class="text-red-500">sebuah mindset</span>. Yakni, mindset yang terdiri dari kerja keras,
                  sikap hidup optimis, inovatif, kreatif, serta leadership
                  “
                </h1>
                <p class="mb-5 text-lg font-semibold text-blue-900 md:text-xl">- Sandiaga Uno, Entrepreneur</p>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white pt-24 lg:pt-[100px]">
          <div class="container mx-auto">
            <h1 class="text-3xl text-dark mb-8 font-bold sm:text-4xl text-center capitalize lg:text-4xl">Tim Kami</h1>
            <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
              Tim Anti Rungkad terdiri dari empat orang yang berasal dari tiga universitas berbeda. 
              Kami selalu berusaha melakukan yang terbaik dengan semangat juang yang tinggi.
            </p>
      
            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
              ${teams.map((profileData) => cardTeamProfile(profileData)).join('')}
            </div>
          </div>
        </section>
      </article>

      <section class="bg-gray-100">
        <div class=" px-5 py-12 mx-auto lg:px-16">
          <div class="flex flex-col w-full mb-8 lg:mb-14 text-center text-gray-500 text-xl lg:text-4xl font-bold sm:text-2xl">
          Institution Partners
          </div>
          <div class="mx-auto text-center">
              <div class="grid grid-cols-3 gap-4 mx-auto lg:grid-cols-3">
                <div>
                  <img class="h-20 mx-auto lg:h-28 sm:h-20" src="http://ubl.ac.id/wp-content/uploads/2019/01/LOGO-UBL.png" alt="Universitas Bandar Lampung">
                  <a href="https://ubl.ac.id/" target="_blank">
                    <h3 class="pt-5 font-semibold text-xs text-gray-500 hover:text-gray-900 transition duration-200 ease-in-out lg:text-xl">Universitas Bandar Lampung</h3>
                  </a>
                </div>
                <div>
                  <img class="h-20 mx-auto lg:h-28 sm:h-20" src="https://feb.umri.ac.id/wp-content/uploads/2018/06/LOGO-UMRI-COLOR-ORI.png" alt="Universitas Muhammadiyah Riau">
                  <a href="https://umri.ac.id/" target="_blank">
                    <h3 class="pt-5 font-semibold text-xs text-gray-500 hover:text-gray-900 transition duration-200 ease-in-out lg:text-xl">Universitas Muhammadiyah Riau</h3>
                  </a>
                </div>
                <div>
                  <img class="h-20 mx-auto lg:h-28 sm:h-20" src="https://upload.wikimedia.org/wikipedia/id/f/ff/Logo_UnivLampung.png" alt="Universitas Lampung">
                  <a href="https://www.unila.ac.id/" target="_blank">
                    <h3 class="pt-5 font-semibold text-xs text-gray-500 hover:text-gray-900 transition duration-200 ease-in-out lg:text-xl">Universitas Lampung</h3>
                  </a>
                </div>
              </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('about-us', AboutUs);
