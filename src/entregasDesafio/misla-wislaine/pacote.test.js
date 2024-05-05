/**
 * pacote_basico: 50,
 * pacote_intermediario: 100,
 * pacote_premium: 200
 * 
 * calcular o pacote a partir do total de horas
 * 
 * Object.entries(MAX_HORAS_POR_PACOTE) --> retorna uma tupla de chave e valor 
 * [pacote_basico, 50],
 * [pacote_intermediario, 100],
 * [pacote_premium, 200]
 * 
 * .find(([key, value]) --> retorna o primeiro elemento que atender a condição
 * 
 * por fim a chave do objeto
 * 
 * teste de borda que é o limite 
 * teste que vai validar os outros valores
 */

const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe("calcularPacote", () => {
    test("Deve retornar pacote básico, caso o total de horas seja menor que 50", () => {
        const totalDeHorasPorProjeto = 49
        const pacoteEsperado = "pacote_basico"

        const resultado = calcularPacote(totalDeHorasPorProjeto)

        expect(resultado).toEqual(pacoteEsperado)
    })

    test("Deve retornar pacote básico, caso o total de horas seja igual a 50", () => {
        const totalDeHorasPorProjeto = 50
        const pacoteEsperado = "pacote_basico"

        const resultado = calcularPacote(totalDeHorasPorProjeto)

        expect(resultado).toEqual(pacoteEsperado)
    })
})