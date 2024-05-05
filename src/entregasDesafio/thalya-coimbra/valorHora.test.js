const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')
//const modulo = require('caminho') -> importa tudo deste módulo
//jest runner -> roda um teste por vez

//describe -> domínio do test
//valores de entrada -> cenários
//teste de borda -> testa o limite -> dado uma entrada inválida o que este teste faz
describe("Valor hora", () => {
    test("Deve retornar 9 reais por hora a partir de uma renda mensal de 1412", () => {
        const rendaMensal = 1412
        const valorPorHoraEsperado = 9
        const resultado = calcularValorPorHora(rendaMensal)
        
        expect(resultado).toBe(valorPorHoraEsperado)
    })
})