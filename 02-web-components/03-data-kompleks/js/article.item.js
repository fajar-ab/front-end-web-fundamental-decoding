export class ArticleItems extends HTMLElement {
  #article;

  set article(article) {
    this.#article = article;
    this.render();
  }

  render() {
    this.innerHTML = /*html*/ `
      <img class="featured-image" src="${this.#article.featuredImage}" alt="${
      this.#article.title
    }">
      <div class="article-info">
        <h2><a href="${this.#article.id}">${this.#article.title}</a></h2>
        <p>${this.#article.description}</p>
      </div>
    `;
  }
}

customElements.define("article-item", ArticleItems);
