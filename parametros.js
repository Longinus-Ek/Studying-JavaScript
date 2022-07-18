// parâmetros da função


function soma(n1 = 0, n2 = 0){
    return n1 + n2;
}

// console.log(soma(5, 10))

// Cuidado com a ordem dos parâmetros

// parâmetros x argumentos


function soma_texto(t1, t2){
    return `Meu primeiro nome é ${t1} e meu segundo nome é ${t2}`;
}

// console.log(soma_texto('Erick', 'Dias'))
// console.log(soma_texto('Dias', 'Erick'))

function multiplica (n1 = 1, n2 = 1){
    return n1 * n2;
}

console.log(multiplica(soma(4, 5), soma (6, 3)))
console.log(multiplica(soma(4, 5)))