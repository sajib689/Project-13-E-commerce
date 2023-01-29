// let menuIcon = document.querySelector('#bar');
// let menu = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     menu.classList.toggle('open');
// }

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener ('click', () =>{
        nav.classList.add('active');
    })
}