
const {calcularValorPorHora} = require("../../dominio/calculadora/Hora/valorHora")
describe("valorHora", () => {
    test("Deve retornar 7 reais por hora a partir de uma renda mensal de 1412", () => {
        const rendaMensal = 1412
        const valorHoraEsperado = 9

        const resultado = calcularValorPorHora(rendaMensal);

        expect (resultado).toEqual(valorHoraEsperado)
    })
})


//passou no test
//falta calcular pj , e CLT