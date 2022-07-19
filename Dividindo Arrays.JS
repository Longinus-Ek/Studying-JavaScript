
//Dividindo com o Slice

const nomes = ['Erick ', 'Ana ', 'Itala ', 'João ', 'Maria ', 'Claudio ', 'Vinicius ', 'Bia ']

const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2, )

console.log(`O tamanho da sala é: ${nomes.length}`)
console.log(`Aludos da sala 1: ${sala1}`)
console.log(`Aludos da sala 2: ${sala2}`)

//Substituindo com o Splice

const nomes2 = ['Erick ', 'Ana ', 'Itala ', 'João ', 'Maria ', 'Claudio ', 'Vinicius ', 'Bia ']

// Erick, Ana e Itala sairam da sala e o Carlos entrou na sala

nomes2.splice(0, 3, 'Carlos ')

console.log(`Lista de chamada: ${nomes2}`)

//Inserindo dados em um array em qualquer posição

const nomes3 = ['Erick ', 'Ana ', 'Itala ', 'João ', 'Maria ', 'Claudio ', 'Vinicius ', 'Bia ']

//Rodrigo entrou na sala

nomes3.splice(3, 0, 'Rodrigo') //Adicionado Rodrigo na posição 3 sem remover ninguém

console.log(`Lista de chamada: ${nomes3}`)

//Juntando Arrays (Concatenação de Arrays) (Função concat)

const sala3 = ['Erick ', 'Ana ', 'Itala ', 'João ']
const sala4 = ['Maria ', 'Claudio ', 'Vinicius ', 'Bia ']

const salasUnificadas = [sala3.concat(sala4)]

console.log(salasUnificadas)

//Arrays com duas dimensões (Basta criar uma lista com listas dentro)

const lista1 = ['Erick ', 'Ana ', 'Itala ', 'João '] //Lista 1D
const lista2 = [10, 9, 10, 5] // Lista 1D

let lista1e2 = [lista1, lista2] //Lista 2D

//Para acessar os elementos da lista de 2 dimensões basta inserir mais um colchetes
console.log(`O aluno ${lista1e2[0][0]}tem média ${lista1e2[1][0]}`)

