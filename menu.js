

let menumobile = document.getElementById('menu-m');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu')

menumobile.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})