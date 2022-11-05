// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

function createGalleryMarkup(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
      })
      .join("");
  }
  
  const galleryRef = document.querySelector(".gallery");
  const addGalleryMarkup = createGalleryMarkup(galleryItems);
  galleryRef.insertAdjacentHTML("afterbegin", addGalleryMarkup);
  
  galleryRef.addEventListener("click", onImgClick);
  
  const ligthbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  
  function onImgClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
      return;
    }
  }
  