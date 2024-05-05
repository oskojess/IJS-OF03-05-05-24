// beforeEach ele vai acontecer antes de rodar os testes
// jest.mock ele vai mockar um modulo
// simular, figurar, disfarçar, maquiar...
//modulo original >> transforma em um modulo falso >> a gente define o comportamento
// Chama a API de cep () fs., moduloValorHora...

const { calcularPacote } = require("./pacote.js");
const { HORAS_POR_FUNCIONALIDADE } = require("./constantes.js"); // Importando as horas por funcionalidade

function calcularValorTotalProjeto(funcionalidades, valorBaseHora) {
    // Calcula o total de horas das funcionalidades
    const totalHoras = funcionalidades.reduce((total, funcionalidade) => {
        return total + HORAS_POR_FUNCIONALIDADE[funcionalidade];
    }, 0);

    // Determina o tipo de pacote com base no total de horas
    const tipoPacote = calcularPacote(totalHoras);

    // Determina a taxa contratual com base no tipo de pacote
    let taxaContratual;
    if (tipoPacote === 'basico') {
        taxaContratual = 0.10;
    } else if (tipoPacote === 'intermediario') {
        taxaContratual = 0.12;
    } else if (tipoPacote === 'premium') {
        taxaContratual = 0.15;
    }

    // Calcula o valor total do projeto
    const valorTotal = totalHoras * valorBaseHora * (1 + taxaContratual);
    return valorTotal;
}

module.exports = { calcularValorTotalProjeto };


/*jest.mock("./pacote.js")

const pacoteModulo = require("../../dominio/calculadora/Projeto/pacote")

describe("desafio",() => {
    beforeEach(() =>{ // antes de rodar cada teste, executar sua lógica
        // simular um comportamento antes de cada teste.
        pacoteModulo.calcularPacote.mockReturnValue("maca")
    })

    test("a",()=> {
        console.log("a",pacoteModulo.calcularPacote(100))
    })
    test("b",() =>{
        pacoteModulo.calcularPacote.mockReturnValue("morango")
        console.log("b", pacoteModulo.calcularPacote(100))
    })
    test("c",() =>{

    })

})*/