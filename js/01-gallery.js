import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryList = document.querySelector('.gallery');
const galleryItemMarkup = createGallaryItemsMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryItemMarkup);
galleryList.addEventListener('click', openModalHandler);


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

function openModalHandler(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    const modalWindow = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
    modalWindow.show();
  
    window.addEventListener('keydown', closeModalHandler); 


    function closeModalHandler(event) {
        if (event.code !== 'Escape') {
            return;
        }
        window.removeEventListener('keydown', closeModalHandler);
        modalWindow.close();
    }
}
