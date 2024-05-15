
/* Una manera de llamar a los distintos personajes y hacer un evento por cada uno*/

// const button1 = document.getElementById('button1');
// const button2 = document.getElementById('button2');
// const button3 = document.getElementById('button3');

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



const buttonhero = document.querySelectorAll('.buttonhero')
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal__content--close');

const hero1 =document.getElementById('hero1');
const hero2 =document.getElementById('hero2');
const hero3 =document.getElementById('hero3');
const img1 =document.getElementById('img1');
const img2 =document.getElementById('img2');
const img3 =document.getElementById('img3');



hero1.addEventListener('click', () => {
    img1.src = "./images/spiderman-1.png";
    img2.src = "./images/spiderman-2.png";
    img3.src = "./images/spiderman-3.png";
});

hero2.addEventListener('click', () => {
    img1.src = "./images/robin-1.png";
    img2.src = "./images/robin-2.png";
    img3.src = "./images/robin-3.png";
});

hero3.addEventListener('click', () => {
    img1.src = "./images/batman-1.png";
    img2.src = "./images/batman-2.png";
    img3.src = "./images/batman-3.png";
});

buttonhero.forEach(item => item.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
}));

close.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('visible');
});