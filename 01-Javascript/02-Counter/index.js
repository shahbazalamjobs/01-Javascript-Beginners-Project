
// index.js 

const counterValue = document.querySelector('.counter__value');
const button__increase = document.querySelector('.counter__increase');
const button__decrease = document.querySelector('.counter__decrease');
const button__reset = document.querySelector('.counter__reset');

button__increase.addEventListener('click', () => {
    updateCounter('button__increase');
});

button__decrease.addEventListener('click', () => {
    updateCounter('button__decrease');
});

button__reset.addEventListener('click', () => {
    updateCounter('button__reset');
});

function updateCounter(action) {
    switch (action) {
        case 'button__increase':
            counterValue.textContent = parseInt(counterValue.textContent) + 1;
            break;
        case 'button__decrease':
            counterValue.textContent = parseInt(counterValue.textContent) - 1;
            break;
        case 'button__reset':
            counterValue.textContent = 0;
            break;
        default:
    }
}