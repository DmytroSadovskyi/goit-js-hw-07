import { galleryItems } from './gallery-items.js';
// Change code below this line
// Пошук порожнього контейнера для майбутньої галереї
const gallery = document.querySelector('.gallery');

// Створення функції для розмітки галереї

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

//  Додавання розмітки у контейнер
gallery.insertAdjacentHTML('afterbegin', makeGallery);

// додавання слухача події для галереї
gallery.addEventListener('click', onGalleryClick);

// реалізація делегування події на div.gallery та створення модалки з великим
// зображенням всередині
function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}">
`,
    {
      // додавання слухача події для кнопки Escape під час показу модального вікна
      onShow: () => {
        gallery.addEventListener('keydown', onEscKeyPress);
      },

      //  видалення слухача події при закритті
      onClose: () => {
        gallery.removeEventListener('keydown', onEscKeyPress);
      },
    }
  );
  instance.show();

  // колбек для слухача події  закриття модального вікна клавішею Escape

  function onEscKeyPress(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }
}
console.log(galleryItems);
