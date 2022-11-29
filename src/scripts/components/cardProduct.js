class CardProduct extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */`
      <div class="relative pt-[104px] home-content">
        <div class="flex items-center justify-between flex-wrap mb-[26px] overview-boxes">
          <div class="flex items-center justify-center rounded-xl bg-[#fff] box">
              <div class="right-side">
                <div class="text-[20px] font-medium topic">Total Order</div>
                <div class="inline-block text-[35px] -mt-[6px] font-medium namber">876</div>
                <div class="flex item-center indicators">
                  <i class="h-5 w-5 bg-[#8fdacb] leading-5 text-center rounded-[50%] text-[#fff] text-[20px] mr-[5px] fa-solid fa-arrow-up"></i>
                  <span class="text-[12px] teks">Up from yesterday</span>
                </div>
              </div>
              <i class="inline-block text-[32px] h-[50px] w-[50px]  leading-[50px] text-center rounded-[12px] text-[#66b0ff] bg-[#cce5ff] fa-solid fa-cart-shopping cart"></i>
          </div>
          <div class="flex items-center justify-center rounded-xl bg-[#fff] box ">
              <div class="right-side">
                <div class="text-[20px] font-medium topic">Total Sales</div>
                <div class="inline-block text-[35px] -mt-[6px] font-medium namber">1,876</div>
                <div class="flex item-center indicators">
                  <i class="h-5 w-5 bg-sembilan leading-5 text-center rounded-50 text-white text-lg mr-5px fa-solid fa-arrow-up"></i>
                  <span class="text-12px teks">Up from yesterday</span>
                </div>
              </div>
              <i class="inline-block text-[32px] h-[50px] w-[50px]  leading-[50px] text-center rounded-[12px] text-[#2bd47d] bg-[#c0f2d8] fa-solid fa-cart-plus"></i>
          </div>
          <div class="flex items-center justify-center rounded-xl bg-[#fff] box ">
              <div class="right-side">
                <div class="text-[20px] font-medium topic">Total Profit</div>
                <div class="inline-block text-[35px] -mt-[6px] font-medium namber">$12,876</div>
                <div class="flex item-center indicators">
                  <i class="h-5 w-5 bg-sembilan leading-5 text-center rounded-50 text-white text-lg mr-5px fa-solid fa-arrow-up"></i>
                  <span class="text-12px teks">Up from yesterday</span>
                </div>
              </div>
              <i class="inline-block text-[32px] h-[50px] w-[50px]  leading-[50px] text-center rounded-[12px] text-[#ffc233] bg-[#ffe8b3] rounded-large fa-solid fa-cart-flatbed"></i>
          </div>
          <div class="flex items-center justify-center rounded-xl bg-[#fff] box ">
              <div class="right-side">
                <div class="text-[20px] font-medium topic">Total Return</div>
                <div class="inline-block text-[35px] -mt-[6px] font-medium namber">$1,086</div>
                <div class="flex item-center indicators">
                  <i class="h-5 w-5 bg-sembilan leading-5 text-center rounded-50 text-white text-lg mr-5px fa-solid fa-arrow-up"></i>
                  <span class="text-12px teks">Up from yesterday</span>
                </div>
              </div>
              <i class="inline-block text-[32px] h-[50px] w-[50px]  leading-[50px] text-center rounded-[12px] text-[#e05260] bg-[#f7d4d7] fa-solid fa-cart-arrow-down"></i>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('card-product', CardProduct);
