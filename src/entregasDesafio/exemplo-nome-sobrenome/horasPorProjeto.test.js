const {calcularHorasDeProjeto} = require ("../../dominio/calculadora/Projeto/horasPorProjeto")

describe ("horasPorProjeto" , () => {
    test("a partir de uma lista de 3 funcionalidades de 16h, deve retornar 48h", () => {
        const listaDeFuncionalidades = [
            "responsabilidade",
            "formulário",
            "otimizacao_seo"
        ]
    
        const totalDeHorasEsperado = 48
        const resultado = calcularHorasDeProjeto(listaDeFuncionalidades);
        expect(resultado). toEqual(totalDeHorasEsperado)
    })
   
})

// não passou, pq o código não localiza a listaDeFuncionalidades, então o teste está retornando NaN. 