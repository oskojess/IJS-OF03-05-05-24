const { TAXAS_CONTRATUAIS_POR_PACOTE } = require('../constantes/constantes')
const { calcularHorasDeProjeto } = require('./horasPorProjeto');
const { calcularPacote } = require('./pacote');

const calcularValorBaseProjeto = (totalDeHorasPorProjeto, valorHora) => {
  return totalDeHorasPorProjeto * valorHora;
};

const calcularValorTotalProjeto = (funcionalidades, valorHora) => {
  const totalDeHorasPorProjeto = calcularHorasDeProjeto(funcionalidades);
  
  const pacote = calcularPacote(totalDeHorasPorProjeto);

  const valorBase = calcularValorBaseProjeto(totalDeHorasPorProjeto, valorHora);

  // Verifique se a taxa contratual está sendo aplicada corretamente
  const taxaContratual = TAXAS_CONTRATUAIS_POR_PACOTE[pacote];
  if (taxaContratual === undefined) {
    throw new Error(`Taxa contratual não encontrada para o pacote: ${pacote}`);
  }

  return Math.round(valorBase * (1 + taxaContratual));
}

exports.calcularValorTotalProjeto = calcularValorTotalProjeto;