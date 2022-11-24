class ListSection extends HTMLElement {
  set products(product) {
    this._product = product;
    this.render();
  }

  render() {
    const item = this._product;
    const cardList = (data) => /* html */ `
    <div>
        <a href="#" class="group h-96 block bg-gray-100 rounded-t-lg overflow-hidden relative">
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

    const asal = item.filter((data) => data.university === 'Universitas Muhammadiyah Riau');
    console.log(asal);

    this.innerHTML = /* html */ `
    <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-12 mx-auto">
        <!-- text - start -->
            <div class="">
                <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Selected</h2>
                <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
            
                <div class="pt-5 pb-5 text-right">
                    <label for="SortBy" class="sr-only"> Sort </label>
          
                    <select
                        id="SortBy"
                        name="sort_by"
                        class="rounded border text-sm"
                        >
                        <option readonly>- Pilih Universitas -</option>
                        <option value="ubl">Universitas Bandar Lampung</option>
                        <option value="unila">Universitas Lampung</option>
                        <option value="umri">Universitas Muhammadiyah Riau</option>
                    </select>
                </div>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                ${item.map((data) => cardList(data)).join('')}
            </div>
        </div>
    </div>
    `;

    const selectedValue = document.getElementById('SortBy').value;
    console.log(selectedValue);
  }
}

customElements.define('list-section', ListSection);