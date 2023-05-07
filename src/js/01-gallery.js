// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const ul = document.querySelector('.gallery');
galleryItems.forEach(image => {
  const item = document.createElement('li');
  item.innerHTML = `<a class="gallery__item" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      alt="${image.description}"
    />
  </a>`;
  ul.append(item);
});
ul.addEventListener('click', selectImage);
function selectImage(event) {
  event.preventDefault();
  if (event.target.tagName !== 'IMG') {
    return;
  }
  let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '250',
  });
}
