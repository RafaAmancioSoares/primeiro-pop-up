const button_empresa = document.querySelector('#botao_empresa')
const button_torre = document.querySelector('#botao_torre')
const button_usuario = document.querySelector('#botao_usuario')
const button_maquina = document.querySelector('#botao_maquina')

const popup_empresa = document.querySelector('.popup_wrapper_empresa')
const popup_torre = document.querySelector('.popup_wrapper_torre')
const popup_usuario = document.querySelector('.popup_wrapper_usuario')
const popup_maquina = document.querySelector('.popup_wrapper_maquina')

const closeButton_empresa = document.querySelector('.popup_close_empresa')
const closeButton_torre = document.querySelector('.popup_close_torre')
const closeButton_usuario = document.querySelector('.popup_close_usuario')
const closeButton_maquina = document.querySelector('.popup_close_maquina')


button_empresa.addEventListener('click', () => {
    popup_empresa.style.display = 'block'
})

button_torre.addEventListener('click', () => {
    popup_torre.style.display = 'block'
})

button_usuario.addEventListener('click', () => {
    popup_usuario.style.display = 'block'
})

button_maquina.addEventListener('click', () => {
    popup_maquina.style.display = 'block'
})



closeButton_empresa.addEventListener('click', () => {
    popup_empresa.style.display = 'none'
})

closeButton_torre.addEventListener('click', () => {
    popup_torre.style.display = 'none'
})

closeButton_usuario.addEventListener('click', () => {
    popup_usuario.style.display = 'none'
})

closeButton_maquina.addEventListener('click', () => {
    popup_maquina.style.display = 'none'
})

/*
popup.addEventListener('click', () => {
    popup.style.display = 'none'
})
*/