const {
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");
const {
  HORAS_POR_FUNCIONALIDADE,
} = require("../../dominio/calculadora/constantes/constantes");

describe("desafio", () => {
  const valorHora = 100;

  test("Pacote básico", () => {
    const resultado = calcularValorTotalProjeto(["setup", "ssr"], valorHora);
    const valorEsperado = 1760;
    expect(resultado).toEqual(valorEsperado);
  });

  test("Pacote intermediário", () => {
    const resultado = calcularValorTotalProjeto(
      ["setup", "formulario", "responsividade", "otimizacao_seo"],
      valorHora
    );
    const valorEsperado = 6720;
    expect(resultado).toEqual(valorEsperado);
  });

  test("Pacote premium", () => {
    const todasFuncionalidades = Object.keys(HORAS_POR_FUNCIONALIDADE);
    const resultado = calcularValorTotalProjeto(
      todasFuncionalidades,
      valorHora
    );
    const valorEsperado = 15600;
    expect(resultado).toEqual(valorEsperado);
  });
});
