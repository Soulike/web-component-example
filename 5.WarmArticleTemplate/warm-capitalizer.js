// @ts-ignore
class WarmCapitalizer extends HTMLElement {
  constructor() {
    super();

    this.#setup();
  }

  get root() {
    let shadowRoot = this.shadowRoot;
    if (!shadowRoot) {
      // Create shadow root for current element
      shadowRoot = this.attachShadow({mode: 'open'});
      // mode controls if this.shadowRoot is set
    }
    return shadowRoot;
  }

  #setupStyle() {
    const styles = `
      :host {
        display: block;
      }

      .warm-capitalizer {
        font-size: xx-large;
        font-weight: bold;
        color: red;
      }
    `;

    const style = document.createElement('style');
    style.innerHTML = styles;
    // The style only affects current element
    this.root.appendChild(style);
  }

  #setup() {
    // You can manipulate DOM inside the custom element

    const text = 'hello world';
    const div = document.createElement('div');
    div.classList.add('warm-capitalizer');
    div.innerText = text.toUpperCase() + '!!!';

    this.#setupStyle();
    // Add nodes under shadow root
    this.root.appendChild(div);
  }
}

customElements.define('warm-capitalizer', WarmCapitalizer);