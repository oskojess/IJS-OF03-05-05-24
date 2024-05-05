const {calcularHorasDeProjeto} = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("horasPorProjeto", () => {

    test("Deve retornar 7 reais por hora a partir de uma renda Mensal de 1412", () => {
        //Valores de entrada
        const listaDeFuncionalidades = [
            "responsividade",
            "formulario",
            "otimizacao_seo"
        ]
        const totalDeHorasEsperado = 48

        const resultado = calcularHorasDeProjeto(listaDeFuncionalidades);

        expect(resultado).toEqual(totalDeHorasEsperado)
    })
})