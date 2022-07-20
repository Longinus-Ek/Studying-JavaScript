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
        }
    ]

}

cliente.dependentes.push({
    nome: "Ana Maria",
    parentesco: "Filha",
    dataNas:"04/01/2014"
})

console.log(cliente)

const filhaNova = cliente.dependentes.filter(i => i.dataNas ==="04/01/2014")


console.log(filhaNova[0].nome)