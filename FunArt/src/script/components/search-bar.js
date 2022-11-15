class SearchBar extends HTMLElement {
  #submitEvent;

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set submitEvent(event) {
    this.#submitEvent = event;
    this.render();
  }

  get value() {
    const form = this.shadowDOM.getElementById("searchForm");
    const formData = new FormData(form);
    const { keyword } = Object.fromEntries(formData.entries());
    return keyword;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = /* html */ `

      <style>
        :host {
          display: block;
          padding: 15px 40px;
          background-color: white;
          box-shadow: 0px 2px 5px rgba(207, 207, 207, 0.829);
        }

        .search-form {
          display: flex;
          flex-direction: row-reverse;
        }

        .search-form > .search-input {
          width: 100%;
          font-size: 1.1em;
          box-sizing: border-box;
          border: none;
        }

        .search-form > .search-input:focus {
          outline: none;
        }

        .search-form > button {
          width: 40px;
          margin-right: 10px;
          background-color: white;
          border: none;
          cursor: pointer;
        }

        button .search-icon {
          padding: 0;
          width: 100%;
          height: 100%;
        }

        @media screen and (max-width: 750px) {
          :host {
            padding: 15px;
          }

          .search-form {
            flex-direction: row;
          }
        }
      </style>
    
      <form class="search-form" id="searchForm">
        <input class="search-input" type="search" name="keyword" placeholder="Search" />
        <button type="submit">
          <svg
            class="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>
    `;

    this.shadowDOM
      .getElementById("searchForm")
      .addEventListener("submit", (e) => e.preventDefault());

    this.shadowDOM
      .getElementById("searchForm")
      .addEventListener("submit", this.#submitEvent);
  }
}

customElements.define("search-bar", SearchBar);
