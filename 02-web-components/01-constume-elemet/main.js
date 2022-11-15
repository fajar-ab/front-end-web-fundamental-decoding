import ImageFigure from "./image-figure.js";

customElements.define("image-figure", ImageFigure);

let imageFigureElement = document.querySelector("image-figure");

// ? jika tidak tersedia pada DOM maka dibuat secara sintaksis
if (!imageFigureElement) {
  imageFigureElement = document.createElement("image-figure");
  document.body.append(imageFigureElement);
}

// menubah/menambahkan nilai atribut captio
setTimeout(() => {
  imageFigureElement.setAttribute("caption", "gambar 1");
}, 2_000);

setTimeout(() => {
  imageFigureElement.setAttribute("data-my", "gambar");
}, 2_000);

// menhapus imageFigureElement dari DOM
setTimeout(() => {
  imageFigureElement.remove();
}, 4_000);
