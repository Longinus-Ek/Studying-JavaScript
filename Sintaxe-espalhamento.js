const clientes = [
    {
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
        }],
    },
    {
    nome: "Juliana",
    cpf: "45678912387",
    dependentes: [{
        nome: "Sofia",
        parentesco: "filha",
        dataNas: "30/08/2020"
    }]    
    }
]
let = listaDependentes = []
for(i=0;i<clientes.length;i++){
    listaDependentes.push(...clientes[i].dependentes)
}

console.table(listaDependentes)