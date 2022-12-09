/* eslint-disable max-len */
class ListSection extends HTMLElement {
  set products(product) {
    this._product = product;
    this.render();
  }

  render() {
    const item = this._product;
    const cardList = (data) => /* html */ `
    <div class="bg-gray-50 card-item rounded-lg hover:shadow-xl transition duration-200 ease-in-out">
      <a
        href="#/katalog/${data.uuid}"
        class="group h-96 block rounded-t-lg overflow-hidden relative">
          <img
            src="${data.url}"
            loading="lazy"
            alt="${data.productName}"
            class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
          />
      </a>

      <div class="flex justify-between items-start gap-2 p-6">
        <div class="flex flex-col">
          <a
            href="#/katalog/${data.uuid}"
            class="text-gray-800 hover:text-gray-500 lg:text-lg font-bold transition duration-100">${data.productName}
          </a>
          <span
            class="text-gray-500 text-sm lg:text-base">
            ${data.user.name} - ${data.user.university}
          </span>
        </div>

        <div class="flex flex-col items-end">
          <span
            class="text-gray-600 lg:text-lg font-bold">
              Rp.${data.price}
          </span>
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
            <div class="py-5 flex flex-col items-center md:flex-row md:justify-between">
              <!-- searching -->
              <search-bar></search-bar>
              <!-- sorting -->
              <label for="SortBy" class="sr-only"> Sort </label>
    
              <select
                id="SortBy"
                name="sort_by"
                class="rounded-md border text-sm py-3 px-4 w-[330px] md:w-60"
                >
                  <option readOnly>Pilih Kategori...</option>
                  <option>Alat Dapur</option>
                  <option>Alat Tulis</option>
                  <option>Fashion</option>
                  <option>Kebutuhan Rumah Tangga</option>
                  <option>Teknologi</option>
                  <option>Jasa</option>
                  <option>Musik</option>
                  <option>Makanan</option>
                  <option>Minuman</option>
              </select>
            </div>
          </div>

          <div class="carding grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            ${item.map((data) => cardList(data)).reverse().join('')}
          </div>
        </div>
      </div>
    `;
    const sorting = this.querySelector('#SortBy');
    sorting.addEventListener('change', () => {
      const filteredCategory = item.filter((data) => data.category === sorting.value);
      const card = document.querySelector('.carding');
      card.innerHTML = filteredCategory.map((data) => cardList(data)).join('');

      if (sorting.value === 'Pilih Kategori...') {
        card.innerHTML = item.map((data) => cardList(data)).join('');
      }
    });
    const searching = this.querySelector('#searchButtonElement');
    searching.addEventListener('click', () => {
      const keyword = this.querySelector('#searchElement').value;
      const searchedProduct = item.filter((data) => data.productName.toUpperCase().includes(keyword.toUpperCase()));
      const card = document.querySelector('.carding');
      card.innerHTML = searchedProduct.map((data) => cardList(data)).join('');
    });

    const searchingForm = this.querySelector('#searchElement');
    searchingForm.addEventListener('keyup', () => {
      const keyword = this.querySelector('#searchElement').value;
      const card = document.querySelector('.carding');

      if (!keyword.length) {
        card.innerHTML = item.map((data) => cardList(data)).join('');
      }

      const searchedProduct = item.filter((data) => data.productName.toUpperCase().includes(keyword.toUpperCase()));
      card.innerHTML = searchedProduct.map((data) => cardList(data)).join('');
    });
  }
}

customElements.define('list-section', ListSection);
