function calcular(operacao) {
    const number1 = document.querySelector('#number1')
    const number2 = document.querySelector('#number2')
    const res = document.querySelector('#res')

    if (number1.value === '' || number2.value === '') {
        res.innerHTML = 'Please, fill in both fields!'
        return
    }

    const n1 = Number(number1.value)
    const n2 = Number(number2.value)

    let resultado

    if (operacao === 'soma') {
        resultado = n1 + n2
    } else if (operacao === 'sub') {
        resultado = n1 - n2
    } else if (operacao === 'divi') {
        resultado = n1 / n2
    } else if (operacao === 'multi') {
        resultado = n1 * n2
    }

    res.innerHTML = `The result: ${resultado}`
}