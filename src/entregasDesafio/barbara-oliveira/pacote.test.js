const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("calcularPacote", () => {
  it("Deve retornar pacote básico em caso o total de horas seja menor que 50", () => {
    const totalDeHorasPorProjeto = 49;
    const pacoteEsperado = "pacote_basico";

    const resultado = calcularPacote(totalDeHorasPorProjeto);
    expect(resultado).toEqual(pacoteEsperado);
  });

  it("Deve retornar pacote básico em caso o total de horas seja igua a 50", () => {
    const totalDeHorasPorProjeto = 50;
    const pacoteEsperado = "pacote_basico";

    const resultado = calcularPacote(totalDeHorasPorProjeto);
    expect(resultado).toEqual(pacoteEsperado);
  });

  it("Deve retornar pacote básico em caso o total de horas seja maior que 50 e menor que 100", () => {
    const totalDeHorasPorProjeto = 85;
    const pacoteEsperado = "pacote_intermediario";

    const resultado = calcularPacote(totalDeHorasPorProjeto);
    expect(resultado).toEqual(pacoteEsperado);
  });

  it("Deve retornar pacote básico em caso o total de horas seja maior que 100", () => {
    const totalDeHorasPorProjeto = 150;
    const pacoteEsperado = "pacote_premium";

    const resultado = calcularPacote(totalDeHorasPorProjeto);
    expect(resultado).toEqual(pacoteEsperado);
  });
});
