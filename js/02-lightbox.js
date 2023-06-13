import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const galleryItemMarkup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(galleryItems) {
    
    return galleryItems.map(({preview, original, description}) => {
        return `<li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                            class="gallery__image"
                            src="${preview}"                            
                            alt="${description}"
                            />
                    </a>
                </li>`;
    }).join('');
}

galleryList.insertAdjacentHTML('beforeend', galleryItemMarkup);

galleryList.addEventListener('click', event => {
   event.preventDefault();
});

 let lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionDelay: 250,
     });
