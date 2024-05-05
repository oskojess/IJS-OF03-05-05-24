const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto")

//1. Criar o arquivo de teste
//2. Importa a função que será testada
//3. Criar o describe com o nome do modulo
//4. Criar o teste
//5. Testar a função colocando console.log dentro da implementação ou no teste
//6. Entender e analisar a função
//7. expect
describe("horasPorProjeto", () => {
    test("a partir de uma lista de 3 funcionalidades de 16h deve retornar 48h", () => {
        // colocar os valores de entrada( cenário)
        const listaDeFuncionalidades = [
        "responsividade", //16h
        "formulario", // 16h
        "otimizacao_seo", //16h
    ]
    const totalDeHorasEsperado = 48

    const resultado = calcularHorasDeProjeto(listaDeFuncionalidades);
    expect (resultado).toEqual(totalDeHorasEsperado)

})
})