// 12. Atualizando um Array de Objetos
// ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

const estoque = [
    { produto: 'Notebook', quantidade: 5, minimo: 10 },
    { produto: 'Smartphone', quantidade: 8, minimo: 15 },
    { produto: 'Monitor', quantidade: 12, minimo: 10 },
    { produto: 'Teclado', quantidade: 3, minimo: 5 },
    { produto: 'Mouse', quantidade: 7, minimo: 10 }
];

estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
        item.quantidade *= 2;
    }
});

console.log(estoque);