class Dashboard extends HTMLElement {
    connectedCallback() {
        this.render()
    }


    render() {
        this.innerHTML = /* html */`
        <div class="fixed h-full w-60 bg-[#0a2558] sidebar">
        <div class="h-20 flex items-center logo-details">
           <i class="text-[28px] font-medium text-white min-w-[60px] text-center fa-brands fa-uniregistry"></i>
           </i>
           <span class="text-white text-xl font-medium logo_name">UMKM</span>
        </div>
        <ul class="nav-links">
           <li class="relative list-none h-[50px]">
              <a href="#" class="h-full w-full flex items-center no-underline 
                 hover:bg-[#081d45] active">
              <i class="min-w-[60px] text-center text-[15px] text-white fa-solid fa-grip"></i>
              <span class="text-white text-[15px] font-normal whitespace-nowrap links_name">Dashboard</span>
              </a>
           </li>
           <li class="relative list-none h-[50px]">
              <a href="#" class="h-full w-full flex items-center no-underline 
                 hover:bg-[#081d45]">
              <i class="min-w-[60px] text-center text-[15px] text-white fa-solid fa-box-archive"></i>
              <span class="text-white text-[15px] font-normal whitespace-nowrap links_name">Product</span>
              </a>
           </li>
           <li class="relative list-none h-[50px]">
              <a href="#" class="h-full w-full flex items-center no-underline 
                 hover:bg-[#081d45]">
              <i class="min-w-[60px] text-center text-[15px] text-white fa-solid fa-list"></i>
              <span class="text-white text-[15px] font-normal whitespace-nowrap links_name">Order list</span>
              </a>
           </li>
           <li class="relative list-none h-[50px]">
              <a href="#" class="h-full w-full flex items-center no-underline 
                 hover:bg-[#081d45]">
              <i class="min-w-[60px] text-center text-[15px] text-white fa-solid fa-chart-pie"></i>
              <span class="text-white text-[15px] font-normal whitespace-nowrap links_name">Analytics</span>
              </a>
           </li>
           <li class="relative list-none h-[50px]">
              <a href="#" class="h-full w-full flex items-center no-underline 
                 hover:bg-[#081d45]">
              <i class="min-w-[60px] text-center text-[15px] text-white fa-solid fa-coins"></i>
              <span class="text-white text-[15px] font-normal whitespace-nowrap links_name">Stock</span>
              </a>
           </li>
           <li class="relative list-none h-[50px]">
              <a href="#" class="h-full w-full flex items-center no-underline 
                 hover:bg-[#081d45]">
              <i class="min-w-[60px] text-center text-[15px] text-white fa-solid fa-book"></i>
              <span class="text-white text-[15px] font-normal whitespace-nowrap links_name">Total order</span>
              </a>
           </li>
           <li class="relative list-none h-[50px]">
              <a href="#" class="h-full w-full flex items-center no-underline 
                 hover:bg-[#081d45]">
              <i class="min-w-[60px] text-center text-[15px] text-white fa-solid fa-user-group"></i>
              <span class="text-white text-[15px] font-normal whitespace-nowrap links_name">Team</span>
              </a>
           </li>
           <li class="relative list-none h-[50px]">
              <a href="#" class="h-full w-full flex items-center no-underline 
                 hover:bg-[#081d45]">
              <i class="min-w-[60px] text-center text-[15px] text-white fa-regular fa-message"></i>
              <span class="text-white text-[15px] font-normal whitespace-nowrap links_name">Messages</span>
              </a>
           </li>
           <li class="relative list-none h-[50px]">
              <a href="#" class="h-full w-full flex items-center no-underline 
                 hover:bg-[#081d45]">
              <i class="min-w-[60px] text-center text-[15px] text-white fa-regular fa-heart"></i>
              <span class="text-white text-[15px] font-normal whitespace-nowrap links_name">Favorites</span>
              </a>
           </li>
           <li class="relative list-none h-[50px]">
              <a href="#" class="h-full w-full flex items-center no-underline 
                 hover:bg-[#081d45]">
              <i class="min-w-[60px] text-center text-[15px] text-white fa-solid fa-gear"></i>
              <span class="text-white text-[15px] font-normal whitespace-nowrap links_name">Setting</span>
              </a>
           </li>
           <li class="absolute bottom-0 w-full list-none h-[50px] log_out">
              <a href="#" class="h-full w-full flex items-center no-underline 
                 hover:bg-[#081d45]">
              <i class="min-w-[60px] text-center text-[15px] text-white fa-solid fa-arrow-right-from-bracket"></i>
              <span class="text-white text-[15px] font-normal whitespace-nowrap links_name">Log out</span>
              </a>
           </li>
        </ul>
     </div>
     <!--home section-->
     <section class="relative bg-[#f5f5f5] min-h-screen left-60 home-section">
        <nav class="flex justify-between h-20 bg-[#fff] items-center fixed left-60">
           <div class="flex items-center text-xl font-medium sidebar-button">
              <i class='text-xl mr-[10px] cursor-pointer bx-menu sidebarBtn fa-solid fa-bars'></i>
              <span class="dashboard">Dashboard</span>
           </div>
           <div class="relative h-[50px] max-w-[550px] w-full search-box">
              <input type="text" class="h-full w-full outline-none bg-[#f5f6fa] rounded-md text-[18px] " placeholder="Search...">
              <i class='absolute h-10 w-10 bg-[#2697ff] right-[5px] top-2/4 rounded leading-10 text-center text-white text-[18px] fa-solid fa-magnifying-glass bx-search' ></i>
           </div>
           <div class="flex items-center bg-[#f5f6fa] rounded-md h-[50px] min-w-[190px] profile-details">
              <img class="h-10 w-10 rounded-md object-cover" src="images/profile/nafasya.png" alt="as">
              <span class="text-[15px] font-medium text-zinc-900 whitespace-nowrap admin_name">Nafasya</span>
              <i class="text-sm text-zinc-900 fa-solid fa-chevron-down"></i>
           </div>
        </nav>
        <!--card-->
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
        <!--end card-->
        <div class="mx-auto px-4 rounded-xl">
           <div class="py-8 rounded-xl">
              <div class="overflow-x-auto relative shadow-md sm:rounded-lg bg-white">
                 <div class="flex justify-between items-center py-4   px-[50px]">
                    <div>
                       <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5" type="button">
                          <span class="sr-only">Action button</span>
                          Action
                          <svg class="ml-2 w-3 h-3" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                       </button>
                       <!-- Dropdown menu -->
                       <div id="dropdownAction" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow">
                          <ul class="py-1 text-sm text-gray-700 " aria-labelledby="dropdownActionButton">
                             <li>
                                <a href="#" class="block py-2 px-4 hover:bg-gray-100">Reward</a>
                             </li>
                             <li>
                                <a href="#" class="block py-2 px-4 hover:bg-gray-100">Promote</a>
                             </li>
                             <li>
                                <a href="#" class="block py-2 px-4 hover:bg-gray-100">Activate account</a>
                             </li>
                          </ul>
                          <div class="py-1">
                             <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">Delete User</a>
                          </div>
                       </div>
                    </div>
                    <label for="table-search" class="sr-only">Search</label>
                    <div class="relative">
                       <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                             <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                          </svg>
                       </div>
                       <input type="text" id="table-search-users" class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for users">
                    </div>
                 </div>
                 <table class="w-full text-sm text-left text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                       <tr>
                          <th scope="col" class="p-4">
                             <div class="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 ">
                                <label for="checkbox-all-search" class="sr-only">checkbox</label>
                             </div>
                          </th>
                          <th scope="col" class="py-3 px-6">
                             Name
                          </th>
                          <th scope="col" class="py-3 px-6">
                             Nim
                          </th>
                          <th scope="col" class="py-3 px-6">
                             University
                          </th>
                          <th scope="col" class="py-3 px-6">
                             Action
                          </th>
                       </tr>
                    </thead>
                    <tbody>
                       <tr class="bg-white border-b   hover:bg-gray-50 ">
                          <td class="p-4 w-4">
                             <div class="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 ">
                                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                             </div>
                          </td>
                          <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap">
                             <div class="pl-0">
                                <div class="text-base font-semibold">Aqsha</div>
                                <div class="font-normal text-gray-500">Mahasiswa</div>
                             </div>
                          </th>
                          <td class="py-4 px-6">
                             200401008
                          </td>
                          <td class="py-4 px-6">
                             Universitas Muhammadiyah Riau
                          </td>
                          <td class="py-4 px-6">
                             <!-- Modal toggle -->
                             <a href="#" type="button" data-modal-toggle="editUserModal" class="font-medium text-blue-600  hover:underline">Edit user</a>
                          </td>
                       </tr>
                    </tbody>
                 </table>
                 <!-- Edit user modal -->
                 <div id="editUserModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center p-4 w-full md:inset-0 h-modal md:h-full">
                    <div class="relative w-full max-w-2xl h-full md:h-auto">
                       <!-- Modal content -->
                       <form action="#" class="relative bg-white rounded-lg shadow">
                          <!-- Modal header -->
                          <div class="flex justify-between items-start p-4 rounded-t border-b">
                             <h3 class="text-xl font-semibold text-gray-900">
                                Edit user
                             </h3>
                             <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="editUserModal">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                   <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                             </button>
                          </div>
                          <!-- Modal body -->
                          <div class="p-6 space-y-6">
                             <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                   <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                                   <input type="text" name="first-name" id="first-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="Bonnie" required="">
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                   <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                                   <input type="text" name="last-name" id="last-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="Green" required="">
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                   <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                   <input type="email" name="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="example@company.com" required="">
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                   <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                                   <input type="number" name="phone-number" id="phone-number" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="e.g. +(12)3456 789" required="">
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                   <label for="department" class="block mb-2 text-sm font-medium text-gray-900">Department</label>
                                   <input type="text" name="department" id="department" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="Development" required="">
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                   <label for="company" class="block mb-2 text-sm font-medium text-gray-900">Company</label>
                                   <input type="number" name="company" id="company" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="123456" required="">
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                   <label for="current-password" class="block mb-2 text-sm font-medium text-gray-900">Current Password</label>
                                   <input type="password" name="current-password" id="current-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="••••••••" required="">
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                   <label for="new-password" class="block mb-2 text-sm font-medium text-gray-900">New Password</label>
                                   <input type="password" name="new-password" id="new-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="••••••••" required="">
                                </div>
                             </div>
                          </div>
                          <!-- Modal footer -->
                          <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
                             <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Save all</button>
                          </div>
                       </form>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </section>
        `
    }
}

customElements.define('dashboard-page', Dashboard);