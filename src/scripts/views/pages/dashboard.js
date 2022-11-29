const Dashboard = {
    async render() {
      return /* html */`
        <dashboard-page></dashboard-page>
      `;
    },
  
    async afterRender() {
      const navbar = document.querySelector('navigation-bar');
      navbar.classList.add('hidden');
  
      const footerBar = document.querySelector('footer-bar');
      footerBar.classList.add('hidden');

      const main = document.querySelector('main');
      main.classList.remove('pt-[60px]')
      main.classList.remove('lg:pt-[88px]')

      let sidebar = document.querySelector(".sidebar");
      let sidebarBtn = document.querySelector(".sidebarBtn");
      sidebarBtn.onclick = function() {
      sidebar.classList.toggle("active");
      if(sidebar.classList.contains("active")){
      sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
      } else
      sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    },
  };
  
  export default Dashboard;