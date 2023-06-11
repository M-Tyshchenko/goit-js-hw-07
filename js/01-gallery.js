import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryList = document.querySelector('.gallery');
//const gallaryListItemImage = document.querySelector('.gallery__image')
const galleryItemMarkup = createGallaryItemsMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryItemMarkup);

function createGallaryItemsMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                            class="gallery__image"
                            src="${preview}"
                            data-source="${original}"
                            alt="${description}"
                            />
                    </a>
                </li>`;
    }).join('');
}

galleryList.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target.dataset.source);
    
});


