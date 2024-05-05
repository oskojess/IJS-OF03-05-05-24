// const modulo = require(".../../dominio/calculador")
const {calcularValorPorHora} = require("../../dominio/calculadora/Hora/valorHora")

describe("valorHora", () =>{
    test("", ()=>{
        const rendaMensal = 1412
        const valorHoraEsperado = 9
        const resultado = calcularValorPorHora(rendaMensal);
        expect(resultado).toEqual(valorHoraEsperado)
    })
})
