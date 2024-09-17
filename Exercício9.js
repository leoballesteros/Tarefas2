// 9. Contabilizando Elementos com uma Condição
// ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

const clientes = [
    { nome: 'Jaques', idade: 28, cidade: 'São Paulo' },
    { nome: 'Edu', idade: 34, cidade: 'Rio de Janeiro' },
    { nome: 'Codifica', idade: 45, cidade: 'Belo Horizonte' },
    { nome: 'Leonardo', idade: 22, cidade: 'Curitiba' },
    { nome: 'Guilherme', idade: 37, cidade: 'Fortaleza' }
];

let contagemMaisDe30 = 0;

clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        contagemMaisDe30++;
    }
});

console.log(`Número de clientes com mais de 30 anos: ${contagemMaisDe30}`);