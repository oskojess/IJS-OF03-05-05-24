const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("calcularHorasDeProjeto", () => {
  it("apartir da lista de funcionalidades de 3 funcionalidades de 16h, deverá retornar 48h", () => {
    const listaDeFuncionalidades = [
      "responsividade",
      "formulario",
      "otimizacao_seo",
    ];

    const valorHoraEsperado = 48;
    const resultado = calcularHorasDeProjeto(listaDeFuncionalidades);

    expect(resultado).toEqual(valorHoraEsperado);
  });
});
