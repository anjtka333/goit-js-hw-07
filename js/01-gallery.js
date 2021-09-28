import { galleryItems } from "./gallery-items.js";
let createDivWithImg = galleryItems.map((item) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
});
document
  .querySelector(".gallery")
  .insertAdjacentHTML("afterbegin", createDivWithImg.join(""));

let instance = null; // як позбутися цієї глобальної змінної?
const openGallary = function (e) {
  e.preventDefault();
  let imgGallery = e.target.getAttribute("data-source");
  instance = basicLightbox.create(
    `<img src="${imgGallery}" width="800" height="600">`,
    {
      onClose: (instance) => {
        document.removeEventListener("keydown", closeImg);
      },
    }
  );
  instance.show();
  document.addEventListener("keydown", closeImg);
};
const closeImg = function (event) {
  if (event.code === "Escape") {
    // instance.close(() => document.removeEventListener("keydown", closeImg));
    instance.close();
    document.removeEventListener("keydown", closeImg);
  }
};
document.querySelector(".gallery").addEventListener("click", openGallary);
