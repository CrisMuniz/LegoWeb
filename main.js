// const button1 = document.getElementById('button1');
// const button2 = document.getElementById('button2');
// const button3 = document.getElementById('button3');

const buttonhero = document.querySelectorAll('.buttonhero')
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal__content--close');


// button1.addEventListener('click', () => {
//     modal.classList.remove('hidden');
//     modal.classList.add('visible');
// });
// button2.addEventListener('click', () => {
//     modal.classList.remove('hidden');
//     modal.classList.add('visible');
// });
// button3.addEventListener('click', () => {
//     modal.classList.remove('hidden');
//     modal.classList.add('visible');
// });

buttonhero.forEach(item => item.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
}))

close.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('visible');
})