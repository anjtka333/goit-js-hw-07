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
document.querySelector(".gallery").addEventListener("click", function (e) {
  e.preventDefault();
  let imgGallery = e.target.getAttribute("data-source");
  instance = basicLightbox.create(
    `
    <img src="${imgGallery}" width="800" height="600">
`
  );
  instance.show();
  // document.addEventListener("keydown", (event) => {
  //   // if (!instance && !instance.visible()) return false;
  //   if (event.code === "Escape") {
  //     instance.close();
  //   }
  // });
  console.log(instance.show());
  if (instance.show() === false) {
    document.removeEventListener("keydown", closeImg);
  }
  document.addEventListener("keydown", closeImg);
  function closeImg() {
    if (event.code === "Escape") {
      instance.close();
    }
  }
  console.log(instance.show());
});

// const instance = basicLightbox.create(
//   event.preventDefault();
//     `<img src="assets/images/image.png" width="800" height="600">`
// );

// instance.show();
// console.log(galleryItems);
