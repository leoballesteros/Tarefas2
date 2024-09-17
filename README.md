<h1>Lista de Exercícios 2 - Formação FullStack +PraTI</h1>

<p>Este repositório contém uma série de exercícios em JavaScript. Siga as instruções abaixo para configurar e executar os exercícios localmente.</p>

<h2>Passo 1: Instalação do Node.js</h2>

<p>Antes de executar os exercícios, é necessário ter o Node.js instalado na sua máquina.</p>

<ol>
    <li><strong>Baixe e instale o Node.js:</strong>
        <p>Visite o site oficial do <a href="https://nodejs.org" target="_blank">Node.js</a> e baixe a versão LTS recomendada. Siga as instruções de instalação de acordo com seu sistema operacional.</p>
    </li>
    <li><strong>Verifique a instalação:</strong>
        <p>Após a instalação, abra o terminal (ou prompt de comando no Windows) e execute o comando abaixo para verificar se o Node.js foi instalado corretamente:</p>
        <pre><code>node -v</code></pre>
        <p>Se o Node.js estiver instalado, o terminal exibirá a versão, como por exemplo: <code>v18.0.0</code>.</p>
    </li>
</ol>

<h2>Passo 2: Configurando o Ambiente de Desenvolvimento</h2>

<ol>
    <li><strong>Clone o repositório:</strong>
        <p>Clone este repositório para sua máquina local usando o comando abaixo:</p>
        <pre><code>git clone https://github.com/seu-usuario/nome-do-repositorio.git</code></pre>
    </li>
    <li><strong>Acesse o diretório do projeto:</strong>
        <p>Navegue até o diretório onde o projeto foi clonado:</p>
        <pre><code>cd nome-do-repositorio</code></pre>
    </li>
    <li><strong>Crie um arquivo JavaScript:</strong>
        <p>Se o arquivo <code>exercicios.js</code> ainda não existir, crie-o manualmente ou usando o terminal:</p>
        <pre><code>touch exercicios.js</code></pre>
    </li>
    <li><strong>Adicione o código dos exercícios:</strong>
        <p>Abra o arquivo <code>exercicios.js</code> em seu editor de texto favorito e cole os códigos dos exercícios nele. Aqui está um exemplo básico de como os exercícios serão estruturados:</p>
        <pre><code>
// Exemplo de código em JavaScript
let produtos = [
    { nome: "Celular", preco: 1500, desconto: 0 },
    { nome: "Notebook", preco: 3000, desconto: 0 },
    { nome: "Teclado", preco: 200, desconto: 0 },
    { nome: "Monitor", preco: 800, desconto: 0 }
];

produtos.forEach(produto => {
    produto.desconto = produto.preco * 0.10;
    let precoComDesconto = produto.preco - produto.desconto;
    console.log(`Produto: ${produto.nome}, Preço com desconto: R$${precoComDesconto}`);
});
        </code></pre>
    </li>
</ol>

<h2>Passo 3: Executando os Exercícios</h2>

<ol>
    <li><strong>Execute o arquivo JavaScript:</strong>
        <p>Para rodar o arquivo e ver os resultados dos exercícios, utilize o Node.js. No terminal, execute o comando abaixo:</p>
        <pre><code>node exercicios.js</code></pre>
    </li>
    <li><strong>Verifique a saída:</strong>
        <p>O terminal exibirá os resultados dos exercícios de acordo com o código JavaScript inserido.</p>
    </li>
</ol>
