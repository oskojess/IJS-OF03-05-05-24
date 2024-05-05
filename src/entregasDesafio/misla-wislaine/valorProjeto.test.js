/*
 * beforeEach ele vai acontecer antes de rodar os testes
 * jest.mock ele vai mockar um modulo
 * simular, figurar, disfcar, macaquar
 * modulo original >> transforma num modulo falso >> 
*/

// Importando a função a ser testada
const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');

// Descrevendo o conjunto de testes para a função calcularValorTotalProjeto
describe("calcularValorTotalProjeto", () => {
    // Teste para verificar se o valor total do projeto é calculado corretamente
    test("Calcula corretamente o valor total do projeto com base nas horas de trabalho, valor hora e tipo de pacote", () => {
        // Definindo os valores de entrada para o teste
        const funcionalidades = ["responsividade", "formulario", "otimizacao_seo"]; // Lista de funcionalidades
        const valorHora = 50; // Valor base da hora

        // Calculando o valor total esperado com base nas regras de negócio
        const totalDeHorasPorProjeto = funcionalidades.length * 16; // Supondo que cada funcionalidade leve 16 horas
        let pacote;
        if (totalDeHorasPorProjeto <= 50) {
            pacote = 'pacote_basico';
        } else if (totalDeHorasPorProjeto <= 100) {
            pacote = 'pacote_intermediario';
        } else {
            pacote = 'pacote_premium';
        }
        const valorBase = totalDeHorasPorProjeto * valorHora;
        let taxa;
        switch (pacote) {
            case 'pacote_basico':
                taxa = 0.1;
                break;
            case 'pacote_intermediario':
                taxa = 0.12;
                break;
            case 'pacote_premium':
                taxa = 0.15;
                break;
            default:
                throw new Error('Tipo de pacote inválido');
        }
        const valorTotalEsperado = Math.round(valorBase * (1 + taxa));

        // Chama a função a ser testada
        const valorTotalProjeto = calcularValorTotalProjeto(funcionalidades, valorHora);

        // Verifica se o resultado é o esperado
        expect(valorTotalProjeto).toEqual(valorTotalEsperado);
    });
});
