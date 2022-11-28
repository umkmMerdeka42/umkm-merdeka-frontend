const Dashboard = {
    async render() {
      return /* html */`
        <h2>welcome</h2>
      `;
    },
  
    async afterRender() {
      const navbar = document.querySelector('navigation-bar');
      navbar.classList.add('hidden');
  
      const footerBar = document.querySelector('footer-bar');
      footerBar.classList.add('hidden');
    },
  };
  
  export default Dashboard;