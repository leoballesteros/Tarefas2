// Manipulação de Arrays de Objetos com forEach
// 7. Modificando Objetos em um Array
// ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

let produtos = [
    { nome: "Celular", preco: 1500, desconto: 0 },
    { nome: "Notebook", preco: 3000, desconto: 0 },
    { nome: "Teclado", preco: 200, desconto: 0 },
    { nome: "Monitor", preco: 800, desconto: 0 }
];

produtos.forEach(produto => {
    produto.desconto = produto.preco * 0.10;
    let precoComDesconto = produto.preco - produto.desconto;
    console.log(`Produto: ${produto.nome}, Preço original: R$${produto.preco.toFixed(2)}, Preço com desconto: R$${precoComDesconto.toFixed(2)}`);
});