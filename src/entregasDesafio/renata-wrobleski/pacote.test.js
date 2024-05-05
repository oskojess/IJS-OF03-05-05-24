
const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe("calcularPacote", () => {
  test("Deve retornar pacote básico, caso o total de horas seja menor que 50", () => {
    const totalDeHorasPorProjeto = 49;
    const pacoteEsperado = 'pacote_basico';

    const resultado = calcularPacote(totalDeHorasPorProjeto);
    expect(resultado).toBe(pacoteEsperado);
  });

  test("Deve retornar pacote básico, caso o total de horas seja igual a 50", () => {
    const totalDeHorasPorProjeto = 50;
    const pacoteEsperado = 'pacote_basico';

    const resultado = calcularPacote(totalDeHorasPorProjeto);
    expect(resultado).toBe(pacoteEsperado);
  });

  test("Deve retornar pacote intermediário para 100 horas", () => {
    const resultado = calcularPacote(100);
    expect(resultado).toBe('pacote_intermediario');
  });

  test("Deve retornar pacote premium para 150 horas", () => {
    const resultado = calcularPacote(150);
    expect(resultado).toBe('pacote_premium');
  });
});
