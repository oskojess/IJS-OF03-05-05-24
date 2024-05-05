const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe("horasPorProjeto", () => {
  test("a partir de uma lista de 3 funcionalidades de 16h, deve retornar 48h", () => {
    const listaDeFuncionalidades = ['responsividade', 'formulario', 'otimizacao_seo'];
    const totalDeHorasEsperado = 48;  // 16 + 16 + 16

    const resultado = calcularHorasDeProjeto(listaDeFuncionalidades);
    expect(resultado).toBe(totalDeHorasEsperado);
  });
});
