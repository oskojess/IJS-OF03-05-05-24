const { calcularValorPorHora, calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

// 1 - Criar o arquivo teste
// 2 - Importa a função que será testada
// 3 - Cria o describe com o nome do projeto
// 4 - Criar o teste
// 5 - Testar a função colocando o console.log dentro da implementação ou no teste --> --> 
//   - Entender e analisar a função --> --> 
// 6 - expect
describe("horaPorProjeto", () => {
    // escrever os testes
    test("",  () => {
        // colocar os valores de entradas (cenário)
        const listaDeFuncionalidades = [
            "responsividade", // 16
            "formulario", // 16
            "otimizacao_seo" // 16
        ]

        const totalDeHorasEsperado = 48

        const resultado = calcularHorasDeProjeto(listaDeFuncionalidades)

        console.log(resultado)

        expect(resultado).toEqual(totalDeHorasEsperado)
    })
})