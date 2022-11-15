class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      
    `;
  }
}

customElements.define('navigation-bar', NavigationBar);
