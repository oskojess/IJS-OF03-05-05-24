// beforeEach  ele vai acontecer antes de rodar os testes
// jest.mock ele vai mockar um modulo
// simular, figurar, disfcar, macaquar >> 
// modulo original >> transforma num modulo falso >> a gente consegue definir qual é o compartamento
// chama a API de cep () fs., modoluValorHora ....

jest.mock("../../dominio/calculadora/Projeto/pacote.js")

const pacoteModulo = require("../../dominio/calculadora/Projeto/pacote")

describe("desafio", () => {
  beforeAll(() => {
    pacoteModulo.calcularPacote.mockReturnValue("maca")
  })

  test("a", () => {
    const resultado = pacoteModulo.calcularPacote(100);
    expect(resultado).toEqual("maca");
  })

  test("b", () => {
    pacoteModulo.calcularPacote.mockReturnValue("morango");
    const resultado = pacoteModulo.calcularPacote(100);
    expect(resultado).toEqual("morango");
  })
})