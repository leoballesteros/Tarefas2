// 13. Implementando um Carrinho de Compras
// ○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

const carrinho = {
    itens: [
        { nome: 'Notebook', quantidade: 1, precoUnitario: 1500 },
        { nome: 'Smartphone', quantidade: 2, precoUnitario: 800 },
        { nome: 'Monitor', quantidade: 1, precoUnitario: 300 },
        { nome: 'Teclado', quantidade: 3, precoUnitario: 50 },
        { nome: 'Mouse', quantidade: 1, precoUnitario: 25 }
    ]
};

let valorTotal = 0;

carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario;
});

console.log(`Valor total do carrinho: R$ ${valorTotal}`);