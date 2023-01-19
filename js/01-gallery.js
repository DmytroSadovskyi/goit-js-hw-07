import { galleryItems } from './gallery-items.js';
// Change code below this line
// отримуємо доступ до порожнього списку
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
listOfImages.addEventListener('keydown', onEscPress);

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

  // слухач події для закриття модального вікна клавішею Escape
  listOfImages.addEventListener('keydown', onEscKeyPress);

  function onEscKeyPress(e) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = e.code === ESC_KEY_CODE;

    if (isEscKey) {
      instance.close();
    }
  }
}

console.log(galleryItems);
