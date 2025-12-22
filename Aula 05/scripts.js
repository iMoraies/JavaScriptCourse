function verificar() {
    var pais = document.querySelector('input#pais').value
    pais = pais.trim().toLowerCase()

    var res = document.querySelector('#res')

    if (pais == 'brasil') {
        res.innerHTML = 'Voce é Brasileiro!'
    } else
        res.innerHTML = 'Voce é Estrangeiro!'

}