class HomePage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */`
      <hero-section></hero-section>
      <card-home></card-home>
      <faq-section></faq-section>
      <advantage-card></advantage-card>
      <Signup-promotion></Signup-promotion>
    `;
  }
}

customElements.define('home-page', HomePage);
