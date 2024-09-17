// 11. Agrupando Elementos com forEach
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

const pedidos = [
    { cliente: 'Leonardo', produto: 'Notebook', quantidade: 2 },
    { cliente: 'Edu', produto: 'Smartphone', quantidade: 3 },
    { cliente: 'Codifica', produto: 'Teclado', quantidade: 1 },
    { cliente: 'Hyago', produto: 'Monitor', quantidade: 4 },
    { cliente: 'Guilherme', produto: 'Notebook', quantidade: 1 },
    { cliente: 'Batman', produto: 'Mouse', quantidade: 2 }
];

const quantidadePorCliente = {};

pedidos.forEach(pedido => {
    if (quantidadePorCliente[pedido.cliente]) {
        quantidadePorCliente[pedido.cliente] += pedido.quantidade;
    } else {
        quantidadePorCliente[pedido.cliente] = pedido.quantidade;
    }
});

console.log(quantidadePorCliente);