const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto")

describe("Cálculo do valor total de um projeto", () => {
  
    // Pacote Básico
    test("Calcula o valor total para o Pacote Básico", () => {

      const funcionalidades = [
        "setup", "formulario"
    ]
      const valorHora = 50;
  
      const valorTotal = calcularValorTotalProjeto(funcionalidades, valorHora)

      const horasTotais = 24
      const taxaPacoteBasico = 1.1
      const valorEsperado = Math.round(horasTotais * valorHora * taxaPacoteBasico)
 
      console.log("Valor total calculado:", valorTotal)
      console.log("Valor esperado:", valorEsperado)

      expect(valorTotal).toEqual(valorEsperado)
    })

    test("Calcula o valor total para o Pacote Intermediário", () => {
        const funcionalidades = ["setup",
        "formulario", 
        "responsividade", 
        "otimizacao_seo"]
        const valorHora = 50
      
        const valorTotal = calcularValorTotalProjeto(funcionalidades, valorHora)
      
        const horasTotais = 56
        const taxaPacoteIntermediario = 1.2
        const valorEsperado = Math.round(horasTotais * valorHora * taxaPacoteIntermediario)
      
        expect(valorTotal).toEqual(valorEsperado);
      })
    
      test("Calcula o valor total para o Pacote Premium", () => {
        const funcionalidades = ["setup", 
        "formulario", 
        "responsividade", 
        "otimizacao_seo", 
        "construcao_1_pagina", 
        "integracao_mailchimp", 
        "ssr", 
        "integracao_api_propria"]
        const valorHora = 50
    
        const valorTotal = calcularValorTotalProjeto(funcionalidades, valorHora)
 
        const horasTotais = 104
        const taxaPacotePremium = 1.5
        const valorEsperado = Math.round(horasTotais * valorHora * taxaPacotePremium)
    
        expect(valorTotal).toEqual(valorEsperado)
      });
  
  })