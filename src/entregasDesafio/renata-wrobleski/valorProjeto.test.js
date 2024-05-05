const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const { TAXAS_CONTRATUAIS_POR_PACOTE } = require('../../dominio/calculadora/constantes/constantes');

describe("valorProjeto", () => {
  test("Deve calcular o valor total do projeto para funcionalidades básicas", () => {
    const funcionalidades = ['responsividade', 'formulario'];
    const valorHora = 100;
    const totalDeHoras = 32; // 16 + 16
    const pacoteEsperado = 'pacote_basico'; // porque 32 < 50
    const valorBase = totalDeHoras * valorHora;
    const valorEsperado = Math.round(valorBase * TAXAS_CONTRATUAIS_POR_PACOTE[pacoteEsperado]);

    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
    expect(resultado).toBe(valorEsperado);
  });
});
