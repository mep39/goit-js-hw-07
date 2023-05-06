import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector(".gallery");

const markup = galleryItems.map((item) => 
            `<li class="gallery__item">
                <a class="gallery__link" href="${item.original}">
                    <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                    />
                </a>
            </li>`
).join("");

list.insertAdjacentHTML('beforeend', markup);

console.log(galleryItems);


list.addEventListener('click', openOriginalImage);
let modalImage;
function openOriginalImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return
    };
    document.addEventListener('keydown', closeModalonEsc);
    const originalImage = event.target.dataset.source;    
    modalImage = basicLightbox.create(
        `<img width="800" height="600" src="${originalImage}">`
        );
    modalImage.show();
};

function closeModalonEsc(e) {
    e.preventDefault();
    if (e.key === 'Escape') {
        modalImage.close();
        document.removeEventListener('keydown', closeModalonEsc);
    }
};
