const {calcularPacote} = require('../../dominio/calculadora/Projeto/pacote');

describe("calcularPacote", () => {
    test("Deve retornar pacote basico, caso o total seja igual a 50", () => {
        const totalDeHorasPorProjeto = 49;
        const pacoteEsperado = "pacote_basico";
    
        const resultado = calcularPacote(totalDeHorasPorProjeto);
    
        expect(pacoteEsperado).toEqual(resultado);      
    });    test("Deve retornar pacote basico, caso o total seja igual a 50", () => {
        const totalDeHorasPorProjeto = 50;
        const pacoteEsperado = "pacote_basico";
    
        const resultado = calcularPacote(totalDeHorasPorProjeto);
    
        expect(pacoteEsperado).toEqual(resultado);      
    });
});