// beforeEach vai acontecer antes de rodar os teses
// jest.mock vai mockar o moódulo
// simular, figurar, disfarçar, maquiar >> mockar
// Pega o módulo original e transforma num falso

jest.mock("../../dominio/calculadora/Projeto/pacote")

describe("Desafio", () => {
    beforeEach(() => { //Excuta antes de cada teste
        pacoteModulo.calcularPacote.mockReturnValue("")
        console.log(pacoteModulo.calcularPacote(100))
    })

    test("", () => {
        pacoteModulo.calcularPacote.mockReturnValue("") 

    })

    
    test("", () => {
        pacoteModulo.calcularPacote.mockReturnValue("") 

    })

    
    test("", () => {
        pacoteModulo.calcularPacote.mockReturnValue("") 

    })
})