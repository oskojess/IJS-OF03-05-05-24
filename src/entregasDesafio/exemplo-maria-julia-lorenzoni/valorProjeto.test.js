const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const {calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");
const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');
const { TAXAS_CONTRATUAIS_POR_PACOTE } = require('../../dominio/calculadora/constantes/constantes');

jest.mock('../../dominio/calculadora/Projeto/horasPorProjeto');
jest.mock('../../dominio/calculadora/Projeto/pacote');

describe('calcularValorTotalProjeto', () => {
  test('calcula o valor total do projeto premium corretamente', () => {
    const funcionalidades = ['responsividade', 'formulario', 'otimizacao_seo', 'integracao_mailchimp', 'integracao_api_propria'];
    const valorHora = 50;

    calcularHorasDeProjeto.mockReturnValue(120); // total de horas esperado
    calcularPacote.mockReturnValue('pacote_premium'); // tipo de pacote esperado

    const valorTotalEsperado = Math.round(120 * valorHora * TAXAS_CONTRATUAIS_POR_PACOTE['pacote_premium']);
    const valorTotalCalculado = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(valorTotalCalculado).toEqual(valorTotalEsperado);
});
});