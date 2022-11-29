class TableallProduct extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `

    `;
  }
}
customElements.define('tableall-product', TableallProduct);
