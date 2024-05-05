
const TAXAS_CONTRATUAIS_POR_PACOTE = {
  pacote_basico: 1.1,
  pacote_intermediario: 1.12,
  pacote_premium: 1.15
};

function calcularValorTotalProjeto(funcionalidades, valorHora) {
  const totalDeHoras = calcularHorasDeProjeto(funcionalidades);
  const pacote = calcularPacote(totalDeHoras);
  const valorBase = totalDeHoras * valorHora;
  return Math.round(valorBase * TAXAS_CONTRATUAIS_POR_PACOTE[pacote]);
}

exports.calcularValorTotalProjeto = calcularValorTotalProjeto;


const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');

describe("valorProjeto", () => {
  test("Deve calcular o valor total do projeto com pacote básico e 50 horas", () => {
    const funcionalidades = [
      { nome: "single_page", horas: 25 },
      { nome: "integração_api", horas: 25 }
    ];
    const valorHora = 100; // Supondo R$100 por hora
    const valorEsperado = 5500; // 50 horas * R$100 * 1.1 (10% do pacote básico)

    const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);
    expect(resultado).toBe(valorEsperado);
  });
});
