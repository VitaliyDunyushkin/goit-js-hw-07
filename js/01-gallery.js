import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const images = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", images);

gallery.addEventListener("click", handleImageClick);

function handleImageClick(event) {
  event.preventDefault();
  console.dir(event.target);

  basicLightbox
    .create(`<img width="" height="" src="${event.target.dataset.source}">`)
    .show();
}

console.dir(basicLightbox);
