const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe("Calcular pacote", () => {
    test("Deve retornar pacote básico, caso o total de horas seja igual ou menor que 50", () => {
        const totalDeHorasPorProjeto = 50;
        const pacoteEsperado = 'pacote_basico';
        const resultado = calcularPacote(totalDeHorasPorProjeto);

        expect(resultado).toEqual(pacoteEsperado)

    })
})