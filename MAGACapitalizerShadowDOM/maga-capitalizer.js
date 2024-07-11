class MagaCapitalizer extends HTMLElement {
  constructor() {
    super();
  }

  /* Life Cycles */

  connectedCallback() {
    console.log('Custom element added to document.');
    this.#setup();
  }

  get root() {
    let shadowRoot = this.shadowRoot;
    if (!shadowRoot) {
      // Create shadow root for current element
      shadowRoot = this.attachShadow({mode: 'open'});
      // mode controls if outside can access shadow dom by this.shadowRoot
    }
    return shadowRoot;
  }

  #setupStyle() {
    const styles = `
      /*:host always selects hosting element. In this case, maga-capitalizer*/
      :host {
        display: block;
        background-color: lightgray;
      }

      .maga-capitalizer {
        font-size: xx-large;
        font-weight: bold;
        color: var(--maga-color); /* CSS custom properties can passthrough shadow dom */
      }
    `;

    const style = document.createElement('style');
    style.innerHTML = styles;
    // The style only affects current element
    this.root.appendChild(style);
  }

  #setup() {
    // You can manipulate DOM inside the custom element

    const text = 'make america great again';
    const div = document.createElement('div');
    div.classList.add('maga-capitalizer');
    div.innerText = text.toUpperCase() + '!!!';

    this.#setupStyle();
    // Add nodes under shadow root
    this.root.appendChild(div);
  }
}

customElements.define('maga-capitalizer', MagaCapitalizer);