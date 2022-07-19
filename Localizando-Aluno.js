
const lista1 = ['Erick', 'Ana', 'Itala', 'João'] //Lista 1D
const lista2 = [10, 9, 10, 5] // Lista 1D

let lista1e2 = [lista1, lista2] //Lista 2D

const exibenota = (nomeAluno) => {
    if (lista1e2[0].includes(nomeAluno)){
        indice = lista1e2[0].indexOf(nomeAluno)
        return lista1e2[0][indice] + ', sua media é ' + lista1e2[1][indice]
    } else {
        return 'O Aluno não está cadastrado'
    }
}


console.log(exibenota("Juliana"))