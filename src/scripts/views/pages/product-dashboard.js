const productDashboard = {
  async render() {
    const innerDashboard = document.querySelector('.innerDashboard');
    innerDashboard.innerHTML = /* html */ `
      <tableall-Product></tableall-Product>
    `;
  },

  async afterRender() {
    const navbar = document.querySelector('navigation-bar');
    navbar.classList.add('hidden');

    const dashBoardDrawer = document.querySelector('dashboard-page');
    dashBoardDrawer.classList.remove('hidden');

    const footerBar = document.querySelector('footer-bar');
    footerBar.classList.add('hidden');

    const main = document.querySelector('main');
    main.classList.add('hidden');

    const sidebar = document.querySelector('.sidebar');
    const sidebarBtn = document.querySelector('.sidebarBtn');
    sidebarBtn.onclick = function () {
      sidebar.classList.toggle('active');
      if (sidebar.classList.contains('active')) {
        sidebarBtn.classList.replace('bx-menu', 'bx-menu-alt-right');
      } else {
        sidebarBtn.classList.replace('bx-menu-alt-right', 'bx-menu');
      }
    };
  },
};

export default productDashboard;
