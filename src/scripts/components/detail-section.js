class DetailSection extends HTMLElement {
  set products(product) {
    this._product = product;
    this.render();
  }

  render() {
    console.log(this._product);
    this.innerHTML = /* html */ `
    <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-10 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="${this._product.image}">
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">${this._product.productName}</h1>
                <h2 class="text-sm title-font text-gray-500 tracking-widest">${this._product.university}</h2>
                <div class="flex mb-4">
                    <span class="text-gray-600">${this._product.uploader}</span>
                </div>
                <p class="leading-relaxed">${this._product.description}</p>
                <div class="flex mt-6 items-center border-b-2 border-gray-100 mb-5">
                </div>
                <div class="flex items-center">
                <span class="title-font font-medium text-2xl text-gray-900">Rp.${this._product.price}</span>
                <span class="ml-auto mr-3 text-sm text-gray-900">Hubungi <br>${this._product.uploader}</span>
                <button class="flex text-white bg-green-500 border-0 py-1 px-5 focus:outline-none hover:bg-green-700 rounded text-2xl">
                  <a href="https://wa.me/62${this._product.telephone.slice(1, 12)}" target="_blank" rel="noopener noreferrer" aria-label="send wa">
                    <i class="fa-brands fa-whatsapp"></i>
                  </a>
                </button>
                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                </button>
                </div>
            </div>
            </div>
        </div>
        </section>
    `;
  }
}

customElements.define('detail-section', DetailSection);
