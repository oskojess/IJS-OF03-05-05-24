const {calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("horasPorProjeto", () => {
  test ("a partir de uma lista de 3 funcionalidades de 16h, deve retornar 48h" , () => {
    const listaDeFuncionalidades = [
      "responsividade", //16h
      "formulario", // 16h
      "otimizacao_seo" // 16h
    ]
    const totalDeHorasEsperadas = 48;
    const resultado = calcularHorasDeProjeto(listaDeFuncionalidades);
    expect(resultado).toEqual(totalDeHorasEsperadas);
  })
})