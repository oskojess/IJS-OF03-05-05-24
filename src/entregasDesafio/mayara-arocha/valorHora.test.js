const module = require("../../dominio/calculadora/Hora/valorHora");
const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora");

describe("valorHora", () => {
//escrever os testes 

test ("Deve retornar 7 reais a partir de uma renda mensal de 1412", () => {
    const rendaMensal = 1412;
    const valorHoraEsperado = 7;

    const resultado = calcularValorPorHora(rendaMensal);

    expect(resultado).toEqual(valorHoraEsperado);
});
});