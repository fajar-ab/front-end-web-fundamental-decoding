class ArtItem extends HTMLElement {
  #detail;

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "closed" });
  }

  set detail(detail) {
    this.#detail = detail;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = /* html */ `
      <style>
        :host {
          display: block;
          border: 1px solid rgb(219, 219, 219);
          box-shadow: -1px 1px 5px rgba(204, 204, 204, 0.699);
          margin-bottom: 15px;
          break-inside: avoid;
        }

        img {
          width: 100%;
          object-fit: cover;
        }

        .info {
          padding: 0 15px 10px;
        }

        .info > .title {
          margin-bottom: 0;
        }

        .info > .artis {
          margin-top: 4px;
          color: #767676;
        }

        .info > .text {
          color: #1a1a1a;
        }
      </style>
      
      <img src="${this.#detail.config.iiif_url}/${this.#detail.data.image_id}/full/843,/0/default.jpg"/>
      <div class="info">
        <h4 class="title">${this.#detail.data.title}</h4>
        ${this.#detail.data.artist_title ? `<p class="artis">${this.#detail.data.artist_title}</p>` : ""}
        ${this.#detail.data.thumbnail.alt_text ? `<p class="text">${this.#detail.data.thumbnail.alt_text}</p>` : ""}
      </div>
      
    `;
  }
}

customElements.define("art-item", ArtItem);
