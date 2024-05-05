const {calcularPacote} = require("./pacote")


describe("calcularPacote", () =>{
    test("Deve retornar pacote basico, caso o total de horas seja menor que 50", () =>{
        const totalDeHorasPorProjeto = 49
        const pacoteEsperado = "pacote_basico"

        const resultado = calcularPacote(totalDeHorasPorProjeto);
        expect(resultado).toEqual(pacoteEsperado)
    })
    test("Deve retornar pacote basico, caso o total de horas seja igual a 50", () =>{
        const totalDeHorasPorProjeto = 50
        const pacoteEsperado = "pacote_basico"

        const resultado = calcularPacote(totalDeHorasPorProjeto);
        expect(resultado).toEqual(pacoteEsperado)
    })
})