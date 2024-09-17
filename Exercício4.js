// Manipulação de Arrays de Objetos com for of
// 4. Iterando Sobre Arrays de Objetos
// ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

let pessoas = [
    { nome: "Leonardo", idade: 25, cidade: "Canoas" },
    { nome: "Guilherme", idade: 27, cidade: "Gravatai" },
    { nome: "Jaques", idade: 26, cidade: "São Paulo" },
    { nome: "Codifica", idade: 4, cidade: "Porto Alegre" }
]

for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`)
}

console.log("-----------------------------------------------------------------------------------------------")
