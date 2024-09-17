// 5. Calculando Valores em Arrays de Objetos
// ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

let alunos = [
    { nome: "Leonardo", score1: 8, score2: 8 },
    { nome: "Guilherme", score1: 7, score2: 10 },
    { nome: "Jaques", score1: 6, score2: 7 },
    { nome: "Codifica", score1: 10, score2: 6 },
]

for (let aluno of alunos) {
    let media = (aluno.score1 + aluno.score1) / 2;
    console.log(`Nome: ${aluno.nome}, Média: ${media.toFixed(2)}`)
}

console.log("-----------------------------------------------------------------------------------------------")