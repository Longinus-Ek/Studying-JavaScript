// == (comparação implícita) Só compara valores
// === (comparação explícita) Compara o valor e o tipo de dado

// const numero = 5;
// const texto= '5';

// console.log(numero === texto)

//typeof (Descobrir tipo de dado da variável)

// console.log(typeof numero)
// console.log(typeof texto)

//Operador Ternário

const IdadeMinima = 18;
const IdadeCliente = 19;

//Comparações com if
if(IdadeCliente >= IdadeMinima){
    console.log("Cerveja")
} else{
    console.log("Suco")
}

//Comparações com operador ternário
                    //Condição             //True    //False
console.log(IdadeCliente >= IdadeMinima ? "Cerveja" : "Suco")



