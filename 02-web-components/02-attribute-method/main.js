import "./image-figure.js";

let imageFigureElement = document.querySelector("image-figure");

// ? jika tidak tersedia pada DOM maka dibuat secara sintaksis
if (!imageFigureElement) {
  imageFigureElement = document.createElement("image-figure");
  imageFigureElement.setAttribute("src", "https://picsum.photos/200/200");
  imageFigureElement.setAttribute("alt", "picsum photos");
  imageFigureElement.setAttribute("caption", "poto diambil dari picsum.ph");

  document.body.append(imageFigureElement);
}

// menubah/menambahkan nilai atribut captio
// setTimeout(() => {
//   imageFigureElement.setAttribute("caption", "gambar 1");
// }, 2_000);

// // menhapus imageFigureElement dari DOM
// setTimeout(() => {
//   imageFigureElement.remove();
// }, 4_000);
