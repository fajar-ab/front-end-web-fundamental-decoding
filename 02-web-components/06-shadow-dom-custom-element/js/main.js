import "./components/image-figure.js";

let imageFigureElement = document.querySelector("image-figure");

// ? jika tidak tersedia pada DOM maka dibuat secara sintaksis
if (!imageFigureElement) {
  imageFigureElement = document.createElement("image-figure");
  imageFigureElement.setAttribute("src", "https://picsum.photos/200/200");
  imageFigureElement.setAttribute("alt", "picsum photos");
  imageFigureElement.setAttribute("caption", "poto diambil dari picsum.ph");

  document.body.append(imageFigureElement);
}
