/**
 * @param {string} htmlString
 * @returns {DocumentFragment}
 */
function html(htmlString) {
  const template = document.createElement('template');
  template.innerHTML = htmlString;
  return template.content;
}

class WarmArticle extends HTMLElement {
  constructor() {
    super();
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
    /* const styles = `
      :host {
        display: block;
      }

      .title-container {
        margin-bottom: 20px;
      }
    `;

    const style = document.createElement('style');
    style.innerHTML = styles; */

    const style = html(`
        <style>
          :host {
            display: block;
          }

          .title-container {
            margin-bottom: 20px;
          }
        </style>
      `);
    this.root.appendChild(style);
  }

  #setup() {
    this.#setupStyle();
    /* const article = document.createElement('article');
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
    article.appendChild(contentContainer); */

    this.root.appendChild(html(`
      <article>
        <div class="title-container">
          <slot name="title"></slot>
        </div>
        <div class="content-container">
          <slot name="content"></slot>
        </div>
      </article>
    `));
  }
}

customElements.define('warm-article', WarmArticle);