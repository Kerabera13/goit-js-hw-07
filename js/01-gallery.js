import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryList = document.querySelector('.gallery');

function createMarkup(arr) {
  return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" />
      </a>
    </li>`).join('');
}

const galleryHTML = createMarkup(galleryItems);

galleryList.innerHTML = galleryHTML;

galleryList.addEventListener('click', handlerclick);

let instance = null;
let modalIsOpen = false;

function handlerclick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.classList.contains('gallery__image')) {
    const originalImageUrl = target.dataset.source;
    instance = basicLightbox.create(`
      <img src="${originalImageUrl}" width="800" height="600">
    `);
    instance.show(); 
    modalIsOpen = true;
  }
 galleryList.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape" && modalIsOpen) {
      instance.close();
      modalIsOpen = false;
    }
  });
}
