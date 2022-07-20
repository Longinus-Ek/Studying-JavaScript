//Criando objeto

const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"123456789",
    email:"andre@email.com"
}


//Acessando objeto com notação de ponto

//console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)

//console.log(cliente.cpf.substring(0,3))

//Acessando objeto com notação de colchete (Uilizado para acessar uma 
//chave do objeto através de uma variável)


const cliente2 = {
    nome:"Andre",
    idade:36,
    cpf:"123456789",
    email:"andre@email.com"
}

const chaves = ['nome', 'idade', 'cpf', 'email']

// console.log(cliente[chaves[0]])

//chaves.forEach(info => console.log(cliente[info]))

//Adicionar valores na chave de um objeto

const cliente3 = {
    nome:"Andre",
    idade:36,
    cpf:"123456789",
    email:"andre@email.com"
}

//console.log(cliente)
//cliente.fone = '99999-9999' //Adicionando a chave fone no objeto cliente3
//console.log(cliente)
//cliente.fone = '88888-8888' //Aletando a chave fone no objeto cliente3
//console.log(cliente)

//Adicionando mais de um valor para a chave de um objeto

const cliente4 = {
    nome:"Andre",
    idade:36,
    cpf:"123456789",
    email:"andre@email.com",
    fones:["5599999-9999", "5588888-8888"] 

}

cliente4.fones.forEach(fone => console.log(fone))

//Adicionando Objeto dentro de objetos

cliente4.dependentes = {
    nome: "Sara",
    parentesco: "Filha",
    dataNas: "20/03/2011"
}

console.log(cliente4)

//Acessando chave de um objeto dentro de um objeto

cliente4.dependentes.nome = "Sara Silva"

console.log(cliente4)









