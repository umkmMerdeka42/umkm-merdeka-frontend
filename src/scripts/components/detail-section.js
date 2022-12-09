class DetailSection extends HTMLElement {
  set products(product) {
    this._product = product;
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-10 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <img alt="ecommerce" class="lg:w-1/2 w-full shadow-md h-auto object-cover object-center rounded" src="${this._product.url}">
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 class="text-gray-900 text-2xl md:text-3xl title-font font-semibold mb-1">${this._product.productName}</h1>
                <h2 class="text-sm title-font text-gray-500 tracking-widest">${this._product.user.university}</h2>
                <div class="flex mb-4">
                  <span class="text-gray-600">${this._product.user.name}</span>
                </div>
                <p class="leading-relaxed">${this._product.description}</p>
                <div class="flex mt-6 items-center border-b-2 border-gray-100 mb-5">
                </div>
                <div class="flex items-center justify-between">
                  <span class="title-font font-medium mr-3 md:mr-0 text-2xl text-gray-900">Rp.${this._product.price}</span>
                  <div class="flex">
                    <button class="flex text-white bg-green-500 border-0 py-1 px-5 focus:outline-none hover:bg-green-700 rounded text-2xl">
                      <a href="https://wa.me/62${this._product.user.telephone.slice(1, 12)}" target="_blank" rel="noopener noreferrer" aria-label="send wa">
                        <i class="fa-brands fa-whatsapp"></i>
                      </a>
                    </button>
                    <div id="likeButtonContainer">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    `;
  }
}

customElements.define('detail-section', DetailSection);
