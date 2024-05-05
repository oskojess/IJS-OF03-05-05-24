const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

describe("valorHora", () => {
  it("Deve retornar 7 reais por hora  apartir de uuma renda mensal de 1412", () => {
    const rendaMensal = 1412;
    const valorHoraEsperado = 9;
    const resultado = calcularValorPorHora(rendaMensal);

    expect(resultado).toEqual(valorHoraEsperado);
  });
});
