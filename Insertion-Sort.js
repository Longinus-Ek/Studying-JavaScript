const livros = require('./Lista-livros')


function insetionSort(lista)
{

    for (let i = 0; i < lista.length; i++)
    {
        let analise = i
        
        while(analise > 0 && lista[analise].preco < lista[analise-1].preco)
        {
            let itemAnalise = lista[analise]
            let itemAnterior = livros[analise - 1]
            
            lista[analise] = itemAnterior
            lista[analise -1] = itemAnalise

            analise--
        }
    }

    console.log(lista)
}

insetionSort(livros)