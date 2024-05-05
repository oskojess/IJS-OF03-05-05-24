const modulo = require ( "./valorHora.test.js")
const { calcularValorPorHora } = require("./valorHora.test")

describe("valorHora", () => {
    //escrever os testes
    test("Deve retornar 7 reais por hora a partir de uma renda mensal",  () => {
        const rendaMensal = 1412
        const valoHoraEsperado = 9

        const resultado = calcularValorPorHora (rendaMensal);

        expect(resultado).toEqual(valoHoraEsperado)

    })

})