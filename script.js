const botaoAbrir = document.querySelector(".header-moble > button")
const botaoFechar = document.querySelector(".header-moble > nav button")

const body = document.querySelector("body")
const nav = document.querySelector(".header-moble nav")

botaoAbrir.addEventListener('click', abrirMenu)
botaoFechar.addEventListener('click', fecharMenu)

function abrirMenu() {
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}

function fecharMenu() {
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}