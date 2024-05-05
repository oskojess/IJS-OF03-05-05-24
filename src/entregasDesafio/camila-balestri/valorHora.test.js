const ValorHora = require ("../../dominio/calculadora/Hora/valorHora");

describe("Valor Hora", function (){
    
    test ("Calcular preço por hora de desenvolvedor", function()
    {
        const resultado = ValorHora.calcularValorPorHora(1412);

    expect(resultado) .toEqual (9);
    }
    )


}
)


