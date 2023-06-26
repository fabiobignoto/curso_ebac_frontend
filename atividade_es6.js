class Aluno {
    constructor(nomeAluno, notaAluno){
        this.nome = nomeAluno;
        this.nota = notaAluno;
    }
}

const alunos = [];

console.log(alunos)

const carlos = new Aluno("Carlos", 9);
alunos.push(carlos);

const lara = new Aluno("Lara", 10);
alunos.push(lara);

const jose = new Aluno("José", 4);
alunos.push(jose);

const claudia = new Aluno("Cláudia", 2);
alunos.push(claudia);

const joao = new Aluno("João", 10);
alunos.push(joao);

// const resultadoFinal = alunos.map(function(aluno){
//     return{
//         nome: aluno.nome,
//         nota: aluno.nota,
//         situacao: aluno.nota>6 ? "Aprovado" : "Reprovado"
//     }
// })


// function Aprovados(aluno) {
//     return aluno.nota >= 6;
// }
// const alunosAprovados = alunos.filter(Aprovados)
const alunosAprovados = alunos.filter((aluno) =>  aluno.nota>=6)


console.log(alunosAprovados);
