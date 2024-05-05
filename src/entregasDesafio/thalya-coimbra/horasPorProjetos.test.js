const { calcularHorasDeProjeto }  = require('../../dominio/calculadora/Projeto/horasPorProjeto.js')

describe("Calcula horas por Projeto", () => {
    test("", () => {
        const funcionalidades = ['responsividade', 'formulario', 'otimizacao_seo']
        const totalDeHoras = 48;
        const resultado = calcularHorasDeProjeto(funcionalidades)

        expect(resultado).toEqual(totalDeHoras)
    })
})