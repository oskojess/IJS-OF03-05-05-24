const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe("valorHora", () => {
  test("calcula o valor por hora com renda mensal de R$5000", () => {
    const rendaMensal = 5000;
    const valorHoraEsperado = Math.ceil(5000 / (8 * 22));  
    const valorHora = calcularValorPorHora(rendaMensal);
    expect(valorHora).toBe(valorHoraEsperado);
  });
});
