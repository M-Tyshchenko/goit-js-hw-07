import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');


function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                     </a>
                </li>`;
    }).join('');
}


const galleryItemMarkup = createGalleryItemsMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryItemMarkup);

galleryList.addEventListener('click', openModalHandler);

function openModalHandler(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return;
    }

    const lightbox = new SimpleLightbox('.gallery a', { 
        caption: true,
    captionData: 'alt',
    captionDelay: 250,
    });
    
 `<div>
    <a href="${event.target.preview}"><img src="${event.target.original}" alt="${event.target.description}" title="${event.target.description}"/></a> 
</div>`
     
  
    window.addEventListener('keydown', closeModalHandler); 


    function closeModalHandler(event) {
        if (event.code !== 'Escape') {
            return;
        }
        window.removeEventListener('keydown', closeModalHandler);
    //     modalWindow.close();
    }
}














// console.log(galleryItems);
