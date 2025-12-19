var nome = prompt('What is your name?')
document.writeln(`Olá <strong>${nome}</strong>! Seu nome tem ${nome.length} letras<br>`)
document.writeln(`Seu nome em maiúsculas é ${nome.toUpperCase()}<br>`) // Utilizamos o writeln para escrever no corpo do HTML
document.writeln(`Seu nome em minúsculas é ${nome.toLowerCase()}`)
// n1.toFixed(2) para formatar número com 2 casas decimais
// n1.toFixed(2).replace('.', ',') para formatar número com 2 casas decimais e trocar ponto por vírgula
// n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) para formatar número como moeda BRL
