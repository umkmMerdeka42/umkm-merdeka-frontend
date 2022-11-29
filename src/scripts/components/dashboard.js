class Dashboard extends HTMLElement {
  connectedCallback() {
    this.render();
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
            <a href="#/dashboard" class="h-full w-full flex items-center no-underline 
              hover:bg-[#081d45] focus:bg-[#081d45]">
            <i class="min-w-[60px] text-center text-[15px] text-white fa-solid fa-grip"></i>
            <span class="text-white text-[15px] font-normal whitespace-nowrap links_name">Dashboard</span>
            </a>
          </li>
          <li class="relative list-none h-[50px]">
            <a href="#/product" class="h-full w-full flex items-center no-underline 
              hover:bg-[#081d45] focus:bg-[#081d45]">
            <i class="min-w-[60px] text-center text-[15px] text-white fa-solid fa-box-archive"></i>
            <span class="text-white text-[15px] font-normal whitespace-nowrap links_name">Product</span>
            </a>
          </li>
          <li class="relative list-none h-[50px]">
            <a href="#" class="h-full w-full flex items-center no-underline 
              hover:bg-[#081d45] focus:bg-[#081d45]">
            <i class="min-w-[60px] text-center text-[15px] text-white fa-solid fa-list"></i>
            <span class="text-white text-[15px] font-normal whitespace-nowrap links_name">Users</span>
            </a>
          </li>
          <li class="absolute bottom-0 w-full list-none h-[50px] log_out">
            <a href="#" class="h-full w-full flex items-center no-underline 
              hover:bg-[#081d45] active:bg-[#081d45]">
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
        <div class="innerDashboard">

        </div>
      </section>
    `;
  }
}

customElements.define('dashboard-page', Dashboard);
