class ListSection extends HTMLElement {
  set products(product) {
    this._product = product;
    this.render();
  }

  render() {
    const item = this._product;
    const cardList = (data) => /* html */ `
    <div>
      <a href="#/katalog/${data.id}" class="group h-96 block bg-gray-100 rounded-t-lg overflow-hidden relative">
        <img src="${data.image}"
        loading="lazy" alt="Photo by Austin Wade" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
      </a>

      <div class="flex justify-between items-start bg-gray-100 rounded-b-lg gap-2 p-4">
        <div class="flex flex-col">
          <a href="#/katalog/${data.id}" class="text-gray-800 hover:text-gray-500 lg:text-lg font-bold transition duration-100">${data.productName}</a>
          <span class="text-gray-500 text-sm lg:text-base">${data.uploader} - ${data.university}</span>
        </div>

        <div class="flex flex-col items-end">
          <span class="text-gray-600 lg:text-lg font-bold">Rp.${data.price}</span>
        </div>
      </div>
    </div>
    `;

    this.innerHTML = /* html */ `
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-12 mx-auto">
        <!-- text - start -->
          <div>
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4">Semua Produk</h2>
            <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">Menampilkan semua produk yang ada di UMKM Merdeka</p>
            <div class="py-5 flex justify-between">
            <!-- searching -->
              <div class="form-control">
                <div class="input-group rounded-md border py-3 px-4">
                  <input type="text" placeholder="Search…" class="input input-bordered" />
                  <button class="btn btn-square align-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </button>
                </div>
              </div>
              <!-- sorting -->
              <label for="SortBy" class="sr-only"> Sort </label>
    
              <select
                id="SortBy"
                name="sort_by"
                class="rounded-md border text-sm py-3 px-2"
                >
                <option readonly>Semua Produk</option>
                <option>Universitas Bandar Lampung</option>
                <option>Universitas Lampung</option>
                <option>Universitas Muhammadiyah Riau</option>
              </select>
            </div>
          </div>

          <div class="carding grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            ${item.map((data) => cardList(data)).join('')}
          </div>
        </div>
      </div>
    `;
    const sorting = this.querySelector('#SortBy');
    sorting.addEventListener('change', () => {
      const filteredUniv = item.filter((data) => data.university === sorting.value);
      const card = document.querySelector('.carding');
      card.innerHTML = filteredUniv.map((data) => cardList(data)).join('');

      if (sorting.value === 'Semua Produk') {
        card.innerHTML = item.map((data) => cardList(data)).join('');
      }
    });
  }
}

customElements.define('list-section', ListSection);
