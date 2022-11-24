const signUp = {
    async render() {
      return /* html */`
        <sign-up></sign-up>
      `;
    },
  
    async afterRender() {
      const navbar = document.querySelector('navigation-bar');
      navbar.classList.add('hidden');
  
      const footerBar = document.querySelector('footer-bar');
      footerBar.classList.add('hidden');
    },
  };
  
  export default signUp;
  