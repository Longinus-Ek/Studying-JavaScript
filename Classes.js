//Praticando OO

class Cliente{
    constructor(nome, email, cpf, saldo)
    {
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo

    } 
    depositar(valor)
    {
        this.saldo += valor
    }

    imprimeSaldo()
    {
        console.log(this.saldo)
    }
}

const andre = new Cliente("Andre", "andre@email.com", "123456789", 1000)

andre.imprimeSaldo()

console.log(andre)

//Praticando Herança

class ClientePoupanca extends Cliente
{
    constructor(nome,email,cpf,saldo,saldoPoupanca)
    {
        super(nome,email,cpf,saldo)
        this.saldoPoupanca = saldoPoupanca    
    }

    depositarPoupanca(valor)
    {
        this.saldoPoupanca += valor
    }
}

const junior = new ClientePoupanca("Junior", "junior@email.com", "123456789", 2000, 5000)

console.log(junior)

andre.depositar(100)
junior.depositar(200)
junior.depositarPoupanca(1000)

console.log(andre)
console.log(junior)