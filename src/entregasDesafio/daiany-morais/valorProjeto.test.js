const { TAXAS_CONTRATUAIS_POR_PACOTE } = require('../constantes/constantes');
const { calcularHorasDeProjeto } = require('./horasPorProjeto');
const { calcularPacote } = require('./pacote');

const calcularValorTotalProjeto = (funcionalidades, valorHora) => {
    const totalDeHorasPorProjeto = calcularHorasDeProjeto(funcionalidades);
    const pacote = calcularPacote(totalDeHorasPorProjeto);

    let valorTotal;
    switch (pacote) {
        case 'pacote_basico':
            valorTotal = valorHora * TAXAS_CONTRATUAIS_POR_PACOTE.pacote_basico;
            break;
        case 'pacote_intermediario':
            valorTotal = valorHora * TAXAS_CONTRATUAIS_POR_PACOTE.pacote_intermediario;
            break;
        case 'pacote_premium':
            valorTotal = valorHora * TAXAS_CONTRATUAIS_POR_PACOTE.pacote_premium;
            break;
        default:
            valorTotal = 0;
    }

    // Arredonda o valor para duas casas decimais
    return parseFloat(valorTotal.toFixed(2));
};


describe("Cálculo do valor total de um projeto", () => {
    test("Pacote Básico - até 50h de trabalho, taxa de 10%", () => {
        const funcionalidades = ["setup", "formulario", "responsividade", "otimizacao_seo", "construcao_1_pagina", "integracao_mailchimp", "ssr", "integracao_api_propria"];
        const valorHora = 50; 

        const valorTotalEsperado = calcularValorTotalProjeto(funcionalidades, valorHora);

        const valorTotal = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(valorTotal).toEqual(valorTotalEsperado);
    });

    test("Pacote Intermediário - até 100h de trabalho, taxa de 12%", () => {
        const funcionalidades = ["setup", "formulario", "responsividade", "otimizacao_seo", "construcao_1_pagina", "integracao_mailchimp", "ssr", "integracao_api_propria"];
        const valorHora = 50; 

        const valorTotalEsperado = calcularValorTotalProjeto(funcionalidades, valorHora);

        const valorTotal = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(valorTotal).toEqual(valorTotalEsperado);
    });

    test("Pacote Premium - até 200h de trabalho, taxa de 15%", () => {
        const funcionalidades = ["setup", "formulario", "responsividade", "otimizacao_seo", "construcao_1_pagina", "integracao_mailchimp", "ssr", "integracao_api_propria"];
        const valorHora = 50; 

        const valorTotalEsperado = calcularValorTotalProjeto(funcionalidades, valorHora);

        const valorTotal = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(valorTotal).toEqual(valorHora * TAXAS_CONTRATUAIS_POR_PACOTE.pacote_premium);
    });
});
