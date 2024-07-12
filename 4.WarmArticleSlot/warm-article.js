// @ts-ignore
class WarmArticle extends HTMLElement {
  #shadowRoot;

  constructor() {
    super();
    this.#setup();
    this.#shadowRoot = null;
  }

  get root() {
    if (!this.#shadowRoot) {
      this.#shadowRoot = this.shadowRoot;
      if (!this.#shadowRoot) {
        // Create shadow root for current element
        this.#shadowRoot = this.attachShadow({mode: 'closed'});
        // mode controls if outside can access shadow dom by this.shadowRoot
      }
    }
    return this.#shadowRoot;
  }

  #setupStyle() {
    const styles = `
      :host {
        display: block;
      }

      .title-container {
        margin-bottom: 20px;
      }
    `;

    const style = document.createElement('style');
    style.innerHTML = styles;
    // The style only affects current element
    this.root.appendChild(style);
  }

  #setup() {
    this.#setupStyle();

    /*
    <article>
      <div class="title-container">
        <slot name="title"></slot>
      </div>
      <div class="content-container">
        <slot name="content"></slot>
      </div>
    </article>
    */

    const article = document.createElement('article');
    this.root.appendChild(article);

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');

    const titleSlot = document.createElement('slot');
    titleSlot.name = 'title';
    titleContainer.appendChild(titleSlot);
    article.appendChild(titleContainer);

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');

    const contentSlot = document.createElement('slot');
    contentSlot.name = 'content';
    contentContainer.appendChild(contentSlot);
    article.appendChild(contentContainer);
  }
}

customElements.define('warm-article', WarmArticle);