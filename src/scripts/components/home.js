class HomePage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */`
      <hero-section></hero-section>
    `;
  }
}

customElements.define('home-page', HomePage);
