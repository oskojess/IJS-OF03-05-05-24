const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");

describe("calcularValorTotalProjeto", () => {
    test("Deve calcular o valor total do projeto com base no pacote básico e lista de funcionalidades", () => {
        // Mock das funcionalidades e valor base da hora
        const funcionalidades = ['setup', 'formulario', 'responsividade']; // Exemplo de lista de funcionalidades
        const valorBaseHora = 10; // Exemplo de valor base da hora

        // Cálculo manual do valor total considerando o pacote básico e as horas de cada funcionalidade
        const horasTotais = 8 + 16 + 16;
        const taxaContratual = 0.10;
        const valorTotalEsperado = horasTotais * valorBaseHora * (1 + taxaContratual);

        // Chamada da função para calcular o valor total do projeto
        const resultado = calcularValorTotalProjeto(funcionalidades, valorBaseHora);

        // Verificação se o resultado obtido é igual ao valor esperado
        expect(resultado).toEqual(valorTotalEsperado);
    });
});
    