let navbar = document.querySelector('ul')

let openMenu = document.getElementById('openMenu')
let closeMenu = document.getElementById('btn-close')


function abrirMenu() {
    navbar.style.zIndex = 1
}

function fecharMenu() {
    navbar.style.zIndex = -999
}

