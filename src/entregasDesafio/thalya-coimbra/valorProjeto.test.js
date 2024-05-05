

const {calcularHorasDeProjeto} = require("../../dominio/calculadora/Projeto/horasPorProjeto")
const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');
const { calcularValorTotalProjeto: {calcularValorBaseProjeto, calcularValorTotalProjeto} } = require('../../dominio/calculadora/Projeto/valorProjeto');
const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')

describe("Valor total projeto" , () => {
    const totalDeHorasPorProjeto = 50;
    const valorPorHoraEsperado = 9
    const funcionalidades = ['responsividade', 'formulario', 'otimizacao_seo']

    test("Deve retornar 9 reais por hora a partir de uma renda mensal de 1412", () => {
        const rendaMensal = 1412
        const resultado = calcularValorPorHora(rendaMensal)
        
        expect(resultado).toBe(valorPorHoraEsperado)
    })

    test("Deve retornar quantidade horas do projeto de acordo com as funcionalidades escolhidas", () => {
        const totalDeHoras = 48;
        const resultado = calcularHorasDeProjeto(funcionalidades)

        expect(resultado).toEqual(totalDeHoras)
    })

    test("Deve retornar pacote básico, caso o total de horas seja igual ou menor que 50", () => {
        const pacoteEsperado = 'pacote_basico';
        const resultado = calcularPacote(totalDeHorasPorProjeto);

        expect(resultado).toEqual(pacoteEsperado)
    })

    test("Calcular valor base", () => {
       const valorBaseEsperado = 450
       const resultado =  calcularValorBaseProjeto(totalDeHorasPorProjeto, valorPorHoraEsperado)  
        
       expect(resultado).toBe(valorBaseEsperado)
    })

    test("Teste pacote básico", () => {
        const valorTotalProjeto = 495;
        const resultado = calcularValorTotalProjeto(funcionalidades, valorPorHoraEsperado)
        expect(resultado).toBe(valorTotalProjeto)
    })
})