class ProductWishlist extends HTMLElement {
  set products(product) {
    this._product = product;
    this.render();
  }

  render() {
    const item = this._product;
    const cardList = (data) => /* html */ `
    <div class="flex flex-col bg-gray-100 rounded-b-lg shadow-gray-600/10 hover:shadow-xl transition duration-200 ease-in-out">
      <a href="#/katalog/${data.uuid}" class="group h-96 block bg-gray-100 rounded-t-lg overflow-hidden relative">
        <img src="${data.url}"
        loading="lazy" alt="Produk" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
      </a>

      
        <div class="flex justify-between items-start rounded-b-lg gap-2 p-4">
          <div class="flex flex-col">
            <a href="#/katalog/${data.uuid}" class="text-gray-800 hover:text-gray-500 lg:text-lg font-bold transition duration-100">${data.productName}</a>
            <span class="text-gray-500 text-sm lg:text-base">${data.user.name}</span>
          </div>

          <div class="flex flex-col items-end">
            <span class="text-gray-600 lg:text-lg font-bold">Rp.${data.price}</span>
          </div>
        </div>

        <div class="flex self-end mt-auto p-4">
          <a href="https://wa.me/62${data.user.telephone.slice(1, 12)}" target="_blank" rel="noopener noreferrer" aria-label="send wa" target="_blank" rel="noopener noreferrer" aria-label="send wa"
            class="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-md px-5 py-3 text-center">
            <i class="fa-brands fa-whatsapp"></i>
            <span class="ml-2">Hubungi Penjual</span> 
          </a>
        </div>
     
    </div>
    `;

    this.innerHTML = /* html */ `
    <div class="bg-white py-6 sm:py-8 md:px-12 lg:py-12 px-4">
        <div class="container  items-center justify-between mx-auto">
          <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4">Wishlist Produk</h2>
          <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">Menampilkan wishlist produk yang ada di UMKM Merdeka</p>
        </div>

        <div class="carding grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 py-6 sm:py-8 lg:py-12">
          ${item.map((data) => cardList(data)).join('')}
        </div>
    </div>
    `;
  }
}

customElements.define('product-wishlist', ProductWishlist);
