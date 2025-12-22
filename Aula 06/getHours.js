var agora = new Date()
var hora = agora.getHours

if (hora <= 12) {
    console.log(`Bom dia! Agora são ${hora} horas.`)
} else if (hora >= 12 && hora <= 18) {
    console.log(`Boa tarde! Agora são ${hora} horas.`)
} else {
    console.log(`Boa noite! Agora são ${hora} horas.`)
}