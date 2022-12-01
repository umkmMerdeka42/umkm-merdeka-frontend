class ProductWishlist extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
    <div class="bg-white py-6 sm:py-8 md:px-12 lg:py-12 px-4">
        <div class="container  items-center justify-between mx-auto">
          <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4">Wishlist Produk</h2>
          <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">Menampilkan wishlist produk yang ada di UMKM Merdeka</p>
        
          <div class="flex justify-end md:order-2 py-5">
            <button type="button" data-collapse-toggle="wishlist-search" aria-controls="wishlist-search" aria-expanded="false" class="md:hidden text-gray-500 hover:bg-gray-100focus:outline-none focus:ring-4 focus:ring-gray-200  rounded-lg text-sm p-2.5 mr-1" >
              <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Search</span>
            </button>

            <div class="relative hidden md:block">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-wishlist" class="block w-full p-2 pl-10 text-sm rounded-md py-3 px-2 text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Wishlist..." >
            </div>
          </div>
        </div>
    </div>
    `;
  }
}

customElements.define('product-wishlist', ProductWishlist);
