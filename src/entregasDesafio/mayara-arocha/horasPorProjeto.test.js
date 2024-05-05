const {calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe("horasPorProjeto", () => {
    test("deve calcular corretamente o total de horas com base na lista de funcionalidades", () => {
        const listaDeFuncionalidades = ["responsivo", "formulario", "otimizacao_seo"];
        const totalDeHoras = 48;
        const resultado = calcularHorasDeProjeto(listaDeFuncionalidades);

        expect(resultado).toEqual(totalDeHoras);
        console.log(resultado);
    });
});