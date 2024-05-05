const { calcularPacote } = require ("../../dominio/calculadora/Projeto/pacote")

describe("calcularPacote" , () => {
    test("Deve retornar pacote básico, caso o total de horas seja menor que 50" , () =>{
        const totalDeHorasPorProjeto = 49
        const pacoteEsperado = "pacote_basico"

        const resultado = calcularPacote(totalDeHorasPorProjeto);

        expect(resultado).toEqual(pacoteEsperado)
    })

    test("Deve retornar pacote básico, caso o total de horas seja igual que 50" , () =>{
        const totalDeHorasPorProjeto = 50
        const pacoteEsperado = "pacote_basico"

        const resultado = calcularPacote(totalDeHorasPorProjeto);

        expect(resultado).toEqual(pacoteEsperado)
    })
    test("Deve retornar pacote intermediário, caso o total de horas seja maior que 50" , () =>{
        const totalDeHorasPorProjeto = 70
        const pacoteEsperado = "pacote_intermediario"

        const resultado = calcularPacote(totalDeHorasPorProjeto);

        expect(resultado).toEqual(pacoteEsperado)
    })
})

