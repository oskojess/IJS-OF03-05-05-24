const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');
/**
 * pacote_basico: 50
 * pacote_intermediario: 100
 * pacote_premium: 200
 * calcular o pacote a partir do total de horas
 */
const calcularPacote = (totalDeHorasPorProjeto) => Object.entries(MAX_HORAS_POR_PACOTE)
  .find(([key, value]) => value > totalDeHorasPorProjeto
)[0];

exports.calcularPacote = calcularPacote;
