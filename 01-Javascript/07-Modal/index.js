
// index.js

const modalButton = document.querySelector('.modal__btn');
const modalCloseButton = document.querySelector('.modal__close-btn');
const modalContainer = document.querySelector('.modal__container')

modalButton.addEventListener('click', modalOpen);
modalCloseButton.addEventListener('click', modalClose);
window.addEventListener('click', (event) => {
    if (event.target == modalContainer) {
        modalClose();
    }
});

function modalOpen() {
    modalContainer.style.display = "flex";
}

function modalClose() {
    modalContainer.style.display = "none";
}
