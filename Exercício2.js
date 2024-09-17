// 2. Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.
 
const Livro = {
    Título : "A volta dos que não foram",
    Autor : "Leonardo Ballesteros",
    AnoPublicado : 1800,
    Gênero : "Cómedia",
}

const newQuery = "Editora";
let proprety = false;
for(let Editora in Livro) {
    if(Editora.includes(Livro)){
        proprety = true;
    }
    else{
        Livro.Editora = "Minha casa"
    }
 }
console.log(Livro)
