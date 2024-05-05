const { MAX_HORAS_POR_PACOTE } = require('../../dominio/calculadora/constantes/constantes');
/**
 * pacote_basico: 50
 * pacote_intermediario: 100
 * pacote_premium: 200
 * calcular o pacote a partir do total de horas
 */
const { calcularPacote } = require ("../../dominio/calculadora/Projeto/pacote" )
describe("calcularPacote", ()=>{
    test("Deve retornar pacote basico, caso o total de horas seja menor que 50", ()=>{
        const totalDeHorasPorProjeto = 49
        const pacoteEsperado ="pacote_basico"

        const resultado = calcularPacote(totalDeHorasPorProjeto);

        expect(resultado).toEqual(pacoteEsperado)
    })
})
exports.calcularPacote = calcularPacote;
