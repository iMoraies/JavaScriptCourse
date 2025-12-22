function humor() {
    var mood = document.querySelector('#humor').value
    var res = document.querySelector('#res')
    mood.trim().toLowerCase()

    if (mood == 'triste') {
        res.innerHTML = `Dê uma pausa, `
        res.innerHTML += `ouça uma música `
        res.innerHTML += `e faça um café.`
    } else {
        res.innerHTML = `Tudo certo.`
    }
   
}