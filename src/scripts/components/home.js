class HomePage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */`
      <hero-section></hero-section>
      <faq-section></faq-section>
    `;
  }
}

customElements.define('home-page', HomePage);
