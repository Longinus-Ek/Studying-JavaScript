const livros = require('./Lista-livros')
const menorValor = require('./Funcao-MenorValor')

for (let i = 0; i <livros.length; i++)
{
  let menor = menorValor(livros, i)
  
  let livroAtual = livros[i]
  let livroMenorPreco = livros[menor]

  livros[i] = livroMenorPreco
  livros[menor] = livroAtual
}

console.log(livros)

// Interando através do for in

for (let i in livros)
{
  let menor = menorValor(livros, i)
  
  let livroAtual = livros[i]
  let livroMenorPreco = livros[menor]

  livros[i] = livroMenorPreco
  livros[menor] = livroAtual
}

console.log(livros)

// Interando através do forEach

livros.forEach((_, i)=> 
{
  let menor = menorValor(livros, i)
  
  let livroAtual = livros[i]
  let livroMenorPreco = livros[menor]

  livros[i] = livroMenorPreco
  livros[menor] = livroAtual
})

console.log(livros)