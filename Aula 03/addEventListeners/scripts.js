
var area = document.getElementById('area')

area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)

function clicar() {
    area.innerText = 'Just clicked!'
    area.style.background = 'red'
}

function entrar() {
    var area = document.getElementById('area')
    area.innerText = 'You entered here!'
}

function sair() {
    var area = document.getElementById('area')
    area.innerText = 'You left the area!'
    area.style.background = 'black'

}
