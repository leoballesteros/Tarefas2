// 6. Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

let vendedores = [
    { nome: "Carlos", cargo: "Vendedor Sênior", comissao: 6000 },
    { nome: "Ana", cargo: "Vendedor Júnior", comissao: 2500 },
    { nome: "Pedro", cargo: "Vendedor Sênior", comissao: 4000 },
    { nome: "Mariana", cargo: "Vendedor Pleno", comissao: 3500 },
    { nome: "Lucas", cargo: "Estagiário de Vendas", comissao: 1200 }
];

let valorMinimo = 5000;  // Valor mínimo predefinido para a comissão

console.log(`Vendedores com comissão maior que R$${valorMinimo}:`);
for (let vendedor of vendedores) {
    if (vendedor.comissao > valorMinimo) {
        console.log(`Nome: ${vendedor.nome}, Cargo: ${vendedor.cargo}, Comissão: R$${vendedor.comissao}`);
    }
}