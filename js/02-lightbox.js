import { galleryItems } from './gallery-items.js';
// Change code below this line

// отримуємо доступ до порожнього списку
const listOfImages = document.querySelector('.gallery');

// створюємо функцію для розмітки галереї

const makeGalleryMarkup = image => {
  const { preview, original, description } = image;

  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
};

const makeGallery = galleryItems.map(makeGalleryMarkup).join('');

//  додаємо розмітку в список
listOfImages.insertAdjacentHTML('afterbegin', makeGallery);

listOfImages.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
}
new SimpleLightbox('.gallery a', { captionsData: 'alt', fadeSpeed: 250 });
console.log(galleryItems);
