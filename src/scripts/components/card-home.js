class CardHome extends HTMLElement {
  set products(product) {
    this._product = product;
    this.render();
  }

  render() {
    const item = this._product;
    const result = item.slice(Math.max(item.length - 3, 0));
    const resultDataReverse = result.reverse();

    const cardHome = (data) => /* html */ `
        <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 bg-opacity-50 shadow-2xl shadow-gray-600/10 hover:shadow-xl transition duration-200 ease-in-out">
          <div class="relative overflow-hidden rounded-xl">
            <img src="${data.url}"
            alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
          </div>
          <div class="mt-6 relative">
            <h3 class="text-2xl font-semibold block">
              <a href="#/katalog/${data.uuid}" class="cursor-pointer text-gray-900 hover:text-gray-600">${data.productName}</a>
            </h3>
            <p class="text-sm font-semibold my-5 text-gray-600 text-clip">
              ${data.user.name} - ${data.user.university}
            </p>
            <p class="mt-6 mb-8 text-gray-600">
              ${data.description.slice(0, 100)}...
            </p>
            <a class="inline-block" href="#/katalog/${data.uuid}">
              <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-400 active:shadow-lg transition duration-150 ease-in-out"
            >Selengkapnya</button>
            </a>
          </div>
          
        </div>
      `;

    this.innerHTML = /* html */ `
      <div  class="py-12">
        <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="mb-12 space-y-2 text-center">
            <h2 class="text-3xl font-bold text-gray-800 md:text-4xl">Produk Terbaru</h2>
            <p class="lg:mx-auto lg:w-6/12 text-gray-600">
              Berikut Merupakan Produk-Produk Terbaru dari UMKM Merdeka
            </p>
          </div>
          <div class="grid gap-8 md:grid-cols-1 md:px-8 lg:px-0 lg:grid-cols-3">
            ${resultDataReverse.map((data) => cardHome(data)).join('')}
          </div>
          <div class="flex mt-10 space-x-2 justify-center">
            <a href="#/katalog">
              <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class="inline-block px-8 py-4 bg-blue-600 text-white font-medium text-md leading-tight rounded-full min-h-[44px] min-w-[44px] shadow-lg hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-400 active:shadow-lg transition duration-150 ease-in-out"
            >Lihat Lebih Banyak</button>
            </a>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('card-home', CardHome);
