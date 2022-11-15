import ArtDetail from "../data/art-detail";
import "./art-item";

class ArtList extends HTMLElement {
  #source;

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set source(source) {
    this.#source = source;
    this.render();
  }

  connectedCallback() {
    this.renderFirst();
  }

  render() {
    this.shadowDOM.innerHTML = /* html */ `
      <style>
        :host {
          display: block;
          width: 90%;
          margin: 40px auto;
          columns: 3;
          column-gap: 15px;
        }

        @media screen and (max-width: 1000px) {
          :host {
            columns: 2;
          }
        }

        @media screen and (max-width: 600px) {
          :host {
            width: 95%;
            columns: 1;
          }
        }
      </style>
    `;

    this.#source.forEach(async (sc) => {
      const artDetail = new ArtDetail(sc.api_link);

      try {
        const artItemElement = document.createElement("art-item");
        const responseDetail = await artDetail.getDetail();

        artItemElement.detail = responseDetail;
        this.shadowDOM.append(artItemElement);
      } catch (error) {
        // eslint-disable-next-line no-useless-return
        return;
      }
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = /* html */ `
      <style>
        .message-box {
          height: calc(100vh - 413px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        .message-icon {
          color: grey;
          height: 100px;
        }

        .message-title {
          margin-top: 5px;
          text-align: center;
          font-weight: lighter;
          color: grey;
        }
      </style>
    `;
    this.shadowDOM.innerHTML += /* html */ `
      <div class="message-box">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="message-icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
        <h2 class="message-title">${message}</h2>
      </div>
    `;
  }

  renderFirst() {
    this.shadowDOM.innerHTML = /* html */ `
      <style>
        .message-box {
          height: calc(100vh - 413px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        .message-icon {
          color: grey;
          height: 100px;
        }

        .message-title {
          margin-top: 5px;
          text-align: center;
          font-weight: lighter;
          color: grey;
        }
      </style>
    `;
    this.shadowDOM.innerHTML += /* html */ `
      <div class="message-box">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="message-icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
    
        <h2 class="message-title">No results yet.</h2>
      </div>
    `;
  }
}

customElements.define("art-list", ArtList);
