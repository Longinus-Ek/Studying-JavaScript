const listaLivros = require('./lista-de-objetos-2')

//função para achar o pivo do array
function quickSort(pivo, array){

    let menores = 0;

    for(let atual = 0; atual < array.length; atual++){
        let produtoAtual = array[atual]
        if(produtoAtual.preco < pivo.preco){
            menores++
        }
    }

    trocaLugar(array, array.indexOf(pivo), menores)
    return array
}
//função para trocar a posição de valores dentro do array
function trocaLugar(array, de, para){
    const elem1 = array[de]
    const elem2 = array[para]

    array[para] = elem1
    array[de] = elem2
}

//função para dividir array onde o pivo está localizado
function divideNoPivo(array){
    let pivo = array[Math.floor(array.length/2)];
    console.log(pivo)
    quickSort(pivo, array);
    let valoresMenores = 0;

    for(let i = 0; i < array.length; i++){
        let atual = array[i];
        if(atual.preco <= pivo.preco && atual != pivo){
            trocaLugar(array, i, valoresMenores)
            valoresMenores++;
        }

    }



    return array;
}


module.exports = trocaLugar;
// console.log(divideNoPivo(listaLivros))
// console.log(quickSort(listaLivros[2], listaLivros));