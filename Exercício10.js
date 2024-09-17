// Combinação de Estruturas
// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

const vendas = [
    { produto: 'Notebook', quantidade: 10, valor: 1500 },
    { produto: 'Smartphone', quantidade: 15, valor: 800 },
    { produto: 'Monitor', quantidade: 8, valor: 300 },
    { produto: 'Teclado', quantidade: 25, valor: 50 },
    { produto: 'Mouse', quantidade: 30, valor: 25 }
];

let valorTotalVendas = 0;

vendas.forEach(venda => {
    valorTotalVendas += venda.quantidade * venda.valor;
});

console.log(`Valor total de vendas: R$ ${valorTotalVendas}`);