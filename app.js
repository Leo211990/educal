//Changing Background Header

function scrollHeader() {
    const header = document.getElementById('header');
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader);

//Enabling Mobile Menu

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle) { navToggle.addEventListener('click', () => { navMenu.classList.add('show-menu')} )}
if(navClose) { navClose.addEventListener('click', () => { navMenu.classList.remove('show-menu')} )}