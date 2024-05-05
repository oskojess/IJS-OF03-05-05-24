
const pacoteModulo = require("../../dominio/calculadora/Projeto/pacote");

jest.mock("../../dominio/calculadora/Projeto/pacote");

describe('Calcular Valor Total do Projeto', () => {
    test('Pacote Básico: até 50h de trabalho, taxa de 10%', () => {
      const funcionalidades = ['funcionalidade1', 'funcionalidade2', 'funcionalidade3'];
      const valorHora = 50;
      const calcularValorTotalProjeto = funcionalidades[0]*valorHora
      const expectedValue = 550; // 50 * 10% = 550
  
      expect(calcularValorTotalProjeto).toBe(expectedValue);
    });
});