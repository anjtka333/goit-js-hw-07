import { galleryItems } from "./gallery-items.js";
// Change code below this line

// const instance = basicLightbox.create(`
//     <div class="gallery__item">
//         <a class="gallery__link" href="${galleryItems.original}">
//             <img
//             class="gallery__image"
//             src="${galleryItems.preview}"
//             data-source="${galleryItems.original}"
//             alt="${galleryItems.description}"
//             />
//         </a>
// </div>
// `);

// instance.show();
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
let instance = null;
document
  .querySelector(".gallery")
  .insertAdjacentHTML("afterbegin", createDivWithImg.join(""));

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
  const closeImg = function (event) {
    if (event.code === "Escape") {
      instance.close(() => document.removeEventListener("keydown", closeImg));
    }
  };
  console.log(instance.show());

  // document.removeEventListener("keydown", closeImg);

  document.addEventListener("keydown", closeImg);
  // document.removeEventListener("keydown", closeImg);
};
document.querySelector(".gallery").addEventListener("click", openGallary);
