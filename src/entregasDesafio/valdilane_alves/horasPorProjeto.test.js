const { calcularHorasDeProjeto} = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("horasPorProjeto",() => {
    test("a partor de uma lista de 3 funcionalidades de 16h, deve retornar 48h", () => {
        const listaDeFuncionalidades = [
            "responsividade" , //16h
            "formulario" , //16h
            "otimizacao_seo",  //16h
        ]
        const totalDeHorasEsperado = 48

        const resultado = calcularHorasDeProjeto(listaDeFuncionalidades);

        expect(resultado).toEqual(totalDeHorasEsperado)
    })

    // test("a partor de uma lista de 3 funcionalidades de 16h, deve retornar 48h", () => {
    //     const listaDeFuncionalidades = [
    //         "responsividade" ,
    //         "formulario" ,
    //         "otimizacao_seo",
    //     ]
    //     const totalDeHoras = 48
    //     const resultado = caclularValorPorHora(rendaMensal);
    //     expect().toEqual(valorHoraEsperado)
    // })
})
