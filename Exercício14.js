// 14. Manipulando Objetos Complexos
// ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

const empresa = {
    departamentos: [
        {
            nome: 'Recursos Humanos',
            funcionarios: [
                { nome: 'Edu', cargo: 'Gerente de RH' },
                { nome: 'Jaques', cargo: 'Analista de RH' }
            ]
        },
        {
            nome: 'Tecnologia',
            funcionarios: [
                { nome: 'Leonardo', cargo: 'Desenvolvedor Frontend' },
                { nome: 'Guilherme', cargo: 'Desenvolvedora Backend' },
                { nome: 'Batman', cargo: 'Analista de Sistemas' }
            ]
        },
        {
            nome: 'Marketing',
            funcionarios: [
                { nome: 'Codifica', cargo: 'Coordenadora de Marketing' },
                { nome: 'Flash', cargo: 'Analista de Marketing' }
            ]
        }
    ]
};

for (const departamento of empresa.departamentos) {
    console.log(`Departamento: ${departamento.nome}`);
    for (const funcionario of departamento.funcionarios) {
        console.log(`  Funcionário: ${funcionario.nome}`);
    }
}