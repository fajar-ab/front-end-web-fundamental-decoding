// * Shadow DOM
const divElement = document.createElement("div");

// * element yang berada di Shadow DOM
const headingElment = document.createElement("h1");
headingElment.textContent = `Ini merupakan konten di dalam Shadow DOM`;

// * melampirkan Shadow root pada Shadow Host
// * mengatur mode Shadow dengan nilai open
const shadowRoot = divElement.attachShadow({ mode: "open" });

// * menempatkan styling pada shadow dom
shadowRoot.innerHTML += /*html*/ `
  <style>
    h1 {
      color: orange;
      text-decoration: underline wavy sandybrown;
    }
  </style>
`;

// * memasukkan shadow element heading ke dalam Shadow Root
shadowRoot.append(headingElment);

// * memasukkan element Shadow Host ke reguler DOM
document.body.append(divElement);
