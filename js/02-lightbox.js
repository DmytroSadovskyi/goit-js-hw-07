import { galleryItems } from './gallery-items.js';
// Change code below this line

// Пошук  порожнього списку для майбутньої галереї
const gallery = document.querySelector('.gallery');

// Створення функції для розмітки галереї

const makeGalleryMarkup = image => {
  const { preview, original, description } = image;

  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
};

const makeGallery = galleryItems.map(makeGalleryMarkup).join('');

//  Додавання розмітки у список
gallery.insertAdjacentHTML('afterbegin', makeGallery);

// додавання слухача події по кліку на галерею
gallery.addEventListener('click', onGalleryClick);

// Створення колбек-функції для слухача події
function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
}
// Створення самого лайтбоксу та додавання відображення напису з alt
new SimpleLightbox('.gallery a', { captionsData: 'alt', fadeSpeed: 250 });
console.log(galleryItems);
