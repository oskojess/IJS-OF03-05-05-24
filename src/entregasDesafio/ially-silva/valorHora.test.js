const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")

// 1. Criar o arquivo de teste .test.js
// 2. Importar a função que será testada
// 3. Descrever o teste (Criar o describe)
// 4. Criar o teste - Declarar as constantes e atribuir os valores
// 5. Testar a função colocando console.log dentro da implementação ou no teste
// Entender e analisar a função
// 6. expect

describe("valorHora", () => {

    test("Deve retornar 7 reais por hora a partir de uma renda Mensal de 1412", () => {

        const rendaMensal = 1412
        const valorHoraEsperada = 9

        const resultado = calcularValorPorHora(rendaMensal);

        expect(resultado).toEqual(valorHoraEsperada)
    })
})