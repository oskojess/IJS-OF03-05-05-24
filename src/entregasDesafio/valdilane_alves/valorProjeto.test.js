const { calcularValorBaseProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')


jest.mock('../../dominio/calculadora/Projeto/pacote.js')
const pacoteModule = require('../../dominio/calculadora/Projeto/pacote.js')

describe("desafio",() =>{
    beforeAll(() => {
        pacoteModule.calcularPacote.mockReturnValue("naca")
    })    

    test('a', () => {
        console.log("a",pacoteModule.calcularPacote(100))
    })
    test('b', () => {
        pacoteModule.calcularPacote.mockReturnValue("morango")
        console.log("b",pacoteModule.calcularPacote(100))
    })
})