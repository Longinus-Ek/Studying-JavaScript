// medias 10, 6.5, 8, 7.5

//Exemplo Função sem arrays
// let nota1 = 10
// let nota2 = 6.5
// let nota3 = 8
// let nota4 = 7.5

// let media = (nota1 + nota2 + nota3 + nota4) 

// console.log(media)

//Exemplo Função com arrays
function calculamedia(notas){
let listanotas = notas;
let i = 0;
let soma = 0;
while(i < listanotas.length){
    soma = soma + listanotas[i];
    i++;
}
return soma/listanotas.length
}

// console.log(soma/notas.length)
console.log(calculamedia([10, 6, 4 , 7 ,8]) + '\n')

//Adicionando Elementos em uma Array (Comando Push)
notas = [10, 6, 4 , 3 ,8]

notas.push(7) //Vai adicionar o numero 7 dentro da array 'listanotas'

//Deletando Elementos em uma Array (Comando pop)

notas.pop()

console.log(`A lista de notas é: ${notas}`)