const notas = [10, 9, 8, 7, 6]

const notasatt = notas.map(nota => nota == 10 ? nota : ++nota)

//nota == 10 ? nota : ++nota => esse método compara se a nota é 
//maior que 10 e retorna a soma ou a própria nota

console.log(notasatt)

//Semelhante ao if dentro do for abaixo:

const notas2 = [10, 9, 8, 7, 6]
const notasatt2 = notas2.map(nota2 => ++nota2)

for(let j = 0; j < notasatt2.length; j++){
    if(notasatt2[j]>10){
        notasatt2[j] = 10;
    } 
    }

console.log(notasatt2)


//map-arrumando-nomes

let nomes = ['ana Julia', 'Caio viniCius', 'BIa sIlva']

const nomesatt = nomes.map(elementos => elementos.toUpperCase())

console.log(nomesatt)
