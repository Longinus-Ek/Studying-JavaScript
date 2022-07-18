//Declaração função simples

function minhaFuncao(param){
    //bloco de código
}

// minhaFuncao('Param')

//Declaração expressão de função

// const soma = function(n1, n2) { return n1 + n2}

// console.log(soma(1,1))

//Diferença entre Função e Expressão de Função
// JS Lista as funções e var no topo (HOISTING)

console.log(apresentar())

function apresentar(){
    return 'Olá!';
}

console.log(soma(1, 1))

const soma = function(n1, n2) {return n1 + n2}
