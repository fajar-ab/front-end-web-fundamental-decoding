import foto from "../../img/foto.jpg";

class JumbotronBox extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = /* html */ `

      <style>

        :host {
          display: block;
          height: 350px;
          position: relative;
          overflow: hidden;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 40%;
        }

        .title {
          width: 400px;
          position: absolute;
          left: 50px;
          bottom: 50px;
          z-index: 1;
          padding: 10px 30px;
          color: white;

          background-color: rgba(0, 0, 0, 0.25);
          -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
        }

        @media screen and (max-width: 750px) {
          .title {
            width: 100%;
            bottom: 0;
            padding: 0 10px;
            left: 0;
            box-sizing: border-box;
            text-align: center;
          }

          .title h1 {
            margin-bottom: -5px;
          }
        }       
      </style>

      <img src="${foto}" alt="" />  
      <div class="title">
        <h1>Fun Art</h1>
        <p>
          Collection of art that spans centuries and the globe, the Art
          Institute of Chicago is located in the heart of the city
        </p>
      </div>
    `;
  }
}

customElements.define("jumbotron-box", JumbotronBox);
