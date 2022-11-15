import "./club-item.js";

class clubList extends HTMLElement {
  #clubs;

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set clubs(clubs) {
    this.#clubs = clubs;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = "";
    this.#clubs.forEach((clup) => {
      const clubItemElement = document.createElement("club-item");

      clubItemElement.club = clup;
      this.shadowDOM.append(clubItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = /*html*/ `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;
    this.shadowDOM.innerHTML += /*html*/ `
      <h2 class="placeholder">${message}</h2>
    `;
  }
}

customElements.define("club-list", clubList);
