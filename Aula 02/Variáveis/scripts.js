var n1 = Number(prompt('Digite um número: ')) // Prompt recebe uma string (Number converte para número) | String(n) ou n.toString() converte para string)
var n2 = Number(prompt('Digite outro número: ')) // Prompt recebe uma string (Number converte para número | String(n) ou n.toString() converte para string)
var s = n1 + n2

alert(`A soma dos números ${n1} e ${n2} é igual a: ${s}`) // String(s) ou s.toString() 
// number + number para adição
// string + string para concatenação
// ${} template literals (crase ` `) placeholder de variáveis dentro de strings
// s.length para obter o tamanho de uma string
// s.toUpperCase() para converter para maiúsculas
// s.toLowerCase() para converter para minúsculas