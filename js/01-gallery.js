import { galleryItems } from './gallery-items.js';
// Change code below this line
// отримуємо доступ до div.gallery
const listOfImages = document.querySelector('.gallery');

// створюємо функцію для розмітки галереї

const makeGalleryMarkup = image => {
  const { preview, original, description } = image;

  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
};

const makeGallery = galleryItems.map(makeGalleryMarkup).join('');

//  додаємо розмітку в список
listOfImages.insertAdjacentHTML('afterbegin', makeGallery);

listOfImages.addEventListener('click', onGalleryClick);

// реалізуємо делегування події на div.gallery та створення модалки з великим
// зображенням всередині
function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}">
`
  );
  instance.show();
}
console.log(galleryItems);
