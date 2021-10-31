// Add imports above this line
import {galleryItems} from './gallery-items';
import SimpleLightbox from 'simplelightbox';
// Change code below this line

// console.log(galleryItems);
const refsContainer = document.querySelector('.gallery');
const galleryResult = galleryItems.map((item) => {
  return `<li class="gallery__item"><a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}">
      </a>
    </li>`;
}).join('');

refsContainer.insertAdjacentHTML('beforeend', galleryResult);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  nav: true,
  captionDelay: 250,
  captionPosition: 'bottom',
  overlay: true,
  spinner: true,
  animationSpeed: 500
});


