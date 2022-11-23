class CardHome extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <div  class="py-12">
        <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="mb-12 space-y-2 text-center">
            <h2 class="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Produk Terbaru</h2>
            <p class="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
              Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia
              aliquid explicabo? Excepturi, voluptate?
            </p>
          </div>
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 bg-opacity-50 shadow-2xl shadow-gray-600/10 hover:shadow-xl transition duration-200 ease-in-out">
              <div class="relative overflow-hidden rounded-xl">
                <img src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
              </div>
              <div class="mt-6 relative">
                <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                  De fuga fugiat lorem ispum laboriosam expedita.
                </h3>
                <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...
                </p>
                <a class="inline-block" href="#">
                  <span class="text-primary">Read more</span>
                </a>
              </div>
              
            </div>
            <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div class="relative overflow-hidden rounded-xl">
                <img src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
              </div>
              <div class="mt-6 relative">
                <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                  De fuga fugiat lorem ispum laboriosam expedita.
                </h3>
                <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...
                </p>
                <a class="inline-block" href="#">
                  <span class="text-primary">Read more</span>
                </a>
              </div>
              
            </div>
            <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div class="relative overflow-hidden rounded-xl">
                <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
              </div>
              <div class="mt-6 relative">
                <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                  De fuga fugiat lorem ispum laboriosam expedita.
                </h3>
                <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...
                </p>
                <a class="inline-block" href="#">
                  <span class="text-primary">Read more</span>
                </a>
              </div>
              
            </div>
            
          </div>
          <div class="flex mt-10 space-x-2 justify-center">
            <a href="#/katalog">
              <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class="inline-block px-8 py-4 bg-blue-600 text-white font-medium text-md leading-tight rounded-full min-h-[44px] min-w-[44px] shadow-lg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-600 active:shadow-lg transition duration-150 ease-in-out"
            >Lihat Lebih Banyak</button>
            </a>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('card-home', CardHome);
