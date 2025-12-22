var idade = 66
console.log(`Você tem ${idade} anos, seu voto é:`)

if (idade < 16) {
    console.log(`Menor de idade`)
} else if (idade < 18 || idade > 65) {
    console.log('Opcional')
} else {
    console.log('Obrigatório')
}
