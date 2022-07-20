const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"123456789",
    email:"andre@email.com",
    fones:["5599999-9999", "5588888-8888"], 
    dependentes: [
        { 
            nome: "Sara",
            parentesco: "Filha",
            dataNas: "20/03/2011"    
        },
        {
            nome: "Ana Maria",
            parentesco: "Filha",
            dataNas:"04/01/2014"
        }
    ],
    saldo:100,

    depositar:function(valor){
        this.saldo += valor
    }

}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)

//Puxando relatório

let relatorio ='';

for(let i in cliente){
    if(typeof cliente[i] === "object" || typeof cliente[i] === "function"){
        continue
    } else {
        relatorio += `
        ${i} ==> ${cliente[i]}
        `
    }
    
}
console.log(relatorio)

//Varrendo objetos

function oferecerSeguro(param){
    const propsClientes = Object.keys(param);
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${param.nome}`)
    }
}
console.log(Object.keys(cliente))
console.log(Object.values(cliente))
console.log(Object.entries(cliente))
oferecerSeguro(cliente)