class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
        <div class="form-control pb-2 md:pb-0">
            <div class="input-group rounded-md border w-[330px] md:w-60 py-3 px-4 flex justify-between">
              <input id="searchElement" type="text" placeholder="Search…" class="input input-bordered outline-none text-sm w-28 md:w-40" />
              <button id="searchButtonElement" class="btn btn-square align-middle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
        </div>
    `;
  }
}

customElements.define('search-bar', SearchBar);
