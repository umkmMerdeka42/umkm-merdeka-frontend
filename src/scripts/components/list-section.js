class ListSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
    <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Selected</h2>
    
            <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
        </div>
        <!-- text - end -->
    
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <!-- product - start -->
            <div>
            <a href="#" class="group h-96 block bg-gray-100 rounded-t-lg overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
    
                <span class="bg-red-500 text-white text-sm font-semibold tracking-wider uppercase rounded-r-lg absolute left-0 top-3 px-3 py-1.5">-50%</span>
            </a>
    
            <div class="flex justify-between items-start bg-gray-100 rounded-b-lg gap-2 p-4">
                <div class="flex flex-col">
                <a href="#" class="text-gray-800 hover:text-gray-500 lg:text-lg font-bold transition duration-100">Fancy Outfit</a>
                <span class="text-gray-500 text-sm lg:text-base">by Fancy Brand</span>
                </div>
    
                <div class="flex flex-col items-end">
                <span class="text-gray-600 lg:text-lg font-bold">$19.99</span>
                <span class="text-red-500 text-sm line-through">$39.99</span>
                </div>
            </div>
            </div>
            <!-- product - end -->
    
            <!-- product - start -->
            <div>
            <a href="#" class="group h-96 block bg-gray-100 rounded-t-lg overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Nick Karvounis" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
            </a>
    
            <div class="flex justify-between items-start bg-gray-100 rounded-b-lg gap-2 p-4">
                <div class="flex flex-col">
                <a href="#" class="text-gray-800 hover:text-gray-500 lg:text-lg font-bold transition duration-100">Cool Outfit</a>
                <span class="text-gray-500 text-sm lg:text-base">by Cool Brand</span>
                </div>
    
                <div class="flex flex-col items-end">
                <span class="text-gray-600 lg:text-lg font-bold">$29.99</span>
                </div>
            </div>
            </div>
            <!-- product - end -->
    
            <!-- product - start -->
            <div>
            <a href="#" class="group h-96 block bg-gray-100 rounded-t-lg overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1548286978-f218023f8d18?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
            </a>
    
            <div class="flex justify-between items-start bg-gray-100 rounded-b-lg gap-2 p-4">
                <div class="flex flex-col">
                <a href="#" class="text-gray-800 hover:text-gray-500 lg:text-lg font-bold transition duration-100">Nice Outfit</a>
                <span class="text-gray-500 text-sm lg:text-base">by Nice Brand</span>
                </div>
    
                <div class="flex flex-col items-end">
                <span class="text-gray-600 lg:text-lg font-bold">$35.00</span>
                </div>
            </div>
            </div>
            <!-- product - end -->
    
            <!-- product - start -->
            <div>
            <a href="#" class="group h-96 block bg-gray-100 rounded-t-lg overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Vladimir Fedotov" class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
            </a>
    
            <div class="flex justify-between items-start bg-gray-100 rounded-b-lg gap-2 p-4">
                <div class="flex flex-col">
                <a href="#" class="text-gray-800 hover:text-gray-500 lg:text-lg font-bold transition duration-100">Lavish Outfit</a>
                <span class="text-gray-500 text-sm lg:text-base">by Lavish Brand</span>
                </div>
    
                <div class="flex flex-col items-end">
                <span class="text-gray-600 lg:text-lg font-bold">$49.99</span>
                </div>
            </div>
            </div>
            <!-- product - end -->
        </div>
        </div>
    </div>
    `;
  }
}

customElements.define('list-section', ListSection);
