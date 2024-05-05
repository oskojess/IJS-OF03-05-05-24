const {calcularHorasDeProjeto} = require("../Projeto/horasPorProjeto")

describe("horasPorProjeto", () =>{
    test("A partir de uma lista de 3 funcionalidades de 16h, deve retornar 48h", () =>{
        const listaDeFuncionalidades = [
            "responsividade",
            "formulario",
            "otimzacao_seo"
        ]
        const totalDeHoras = 48

        const resultado = calcularHorasDeProjeto(listaDeFuncionalidades);
        expect(resultado).toEqual(totalDeHoras)
    })

})