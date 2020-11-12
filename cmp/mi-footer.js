class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; Elda Vanessa Vazquez Cisneros`;
  }
}
customElements.define("mi-footer", MiFooter);
