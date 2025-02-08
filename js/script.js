const menu = document.querySelector('.menu-button ');
const menuList = document.querySelector('.nav-item');
menu.addEventListener('click', ()=>{
    menuList.classList.toggle('show')
});