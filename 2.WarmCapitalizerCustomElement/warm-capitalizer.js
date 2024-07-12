// @ts-ignore
class WarmCapitalizer extends HTMLElement {
  constructor() {
    super();
    
  }

  /* Life Cycles */

  connectedCallback() {
    console.log('Custom element added to document.');
    this.#setup();
  }

  disconnectedCallback() {
    console.log('Custom element removed from document.');
  }

  adoptedCallback() {
    console.log('Custom element moved to new document.');
  }

  static get observedAttributes() {
    return ['attribute1', 'attribute2'];
  }


  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed.`);
  }

  #setupStyle() {
    const styles = `
      .warm-capitalizer {
        font-size: xx-large;
        font-weight: bold;
        color: ${this.getAttribute('color')};
      }
    `;

    const style = document.createElement('style');
    style.innerHTML = styles;
    this.appendChild(style);
  }

  #setup()
  {
    console.log(this.getAttribute('hello'));
    const text = this.innerText;
    this.innerHTML = '';

    // You can manipulate DOM inside the custom element
    const div = document.createElement('div');
    div.classList.add('warm-capitalizer');
    div.innerText = text.toUpperCase() + '!!!';

    // Use this to access self
    this.#setupStyle();
    this.appendChild(div);
  }
}

customElements.define('warm-capitalizer', WarmCapitalizer);