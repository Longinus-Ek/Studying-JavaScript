const Livros = require('./Lista-livros'); //Chamando uma função de outro arquivo .js

function menorValor(produtos, posinit)
{
let barato = posinit

    for(i = posinit; i < produtos.length; i++)
    {
        if(produtos[i].preco < produtos[barato].preco)
        {
            barato = i;
        }
    }
return barato
}
module.exports = menorValor




