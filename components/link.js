class socialLink extends HTMLElement {
  constructor() {
    super();
    this.scr = "";
    this.link = "/";
    this.titulo = "";
  }

  static get observedAttributes() {
    return ["src", "titulo", "link"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "link":
        this.link = newValue;
        break;
      case "titulo":
        this.titulo = newValue;
        break;
      case "src":
        this.src = newValue;
        break;
    }
  }

  connectedCallback() {
    this.innerHTML = `<div class="socialMediaLink">
              <h3 class="socialMediaLink_title cormorant-garamond">${this.titulo}</h3>
              <a href="${this.link}" class="heart-link" target="_blank">
                <div class="love"></div>
                <div class="icon">
                  <img src="${this.src}" alt="${this.titulo}" />
                </div>
              </a>
            </div>`;
  }
}

window.customElements.define("social-link", socialLink);
