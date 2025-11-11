const botao = document.querySelector('.botao-menu')
const menu = document.querySelector('.menu-lateral')
const conteudo = document.querySelector('.conteudo')
const background = document.querySelector('.background')

botao.addEventListener('click', () => {
    menu.classList.toggle('ativo')
    botao.classList.toggle('ativo')
    conteudo.classList.toggle('ativo')
    background.classList.toggle('ativo')
    document.body.style.backgroundColor = menu.classList.classList.contains('ativo') ? '#322d35ff' : '#ffffffff'
})

background.addEventListener('click', () => {
    menu.classList.remove('ativo')
    botao.classList.remove('ativo')
    conteudo.classList.remove('ativo')
    background.classList.remove('ativo')
    document.body.style.backgroundColor = '#ffffffff'
})