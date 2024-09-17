// 8. Criando Novos Arrays a Partir de Objetos
// ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

const filmesBatman = [
    { titulo: 'Batman Begins', diretor: 'Christopher Nolan', anoLancamento: 2005 },
    { titulo: 'The Dark Knight', diretor: 'Christopher Nolan', anoLancamento: 2008 },
    { titulo: 'The Dark Knight Rises', diretor: 'Christopher Nolan', anoLancamento: 2012 },
    { titulo: 'Batman VS Superman: Dawn of Justice', diretor: 'Zack Snyder', anoLancamento: 2016 },
    { titulo: 'The Batman', diretor: 'Matt Reeves', anoLancamento: 2022 }
];

const titulosFilmes = [];
filmesBatman.forEach(filme => {
    titulosFilmes.push(filme.titulo);
});

console.log(titulosFilmes);