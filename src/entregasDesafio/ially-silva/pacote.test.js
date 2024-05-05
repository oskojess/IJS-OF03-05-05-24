const {calcularPacote} = require("../../dominio/calculadora/Projeto/pacote")

describe("pacotePorHoras", () => {

  test( "", () => {
    const totalDeHorasPorProjeto = 49
    const pacoteEsperado = "pacote_basico"

    const resultado = calcularPacote(totalDeHorasPorProjeto);

    expect(resultado).toEqual(pacoteEsperado)
  })

  test( "", () => {
    const totalDeHorasPorProjeto = 52
    const pacoteEsperado = "pacote_intermediario"

    const resultado = calcularPacote(totalDeHorasPorProjeto);

    expect(resultado).toEqual(pacoteEsperado)
    console.log(resultado)
  })
})