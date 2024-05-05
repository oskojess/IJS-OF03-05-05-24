const { HORAS_POR_FUNCIONALIDADE } = require('../constantes/constantes');

// Calcula horas a partir de uma lista de funcionalidades pré-definidas

const valorInicial = 0
const calcularHorasDeProjeto = (listaDeFuncionalidades) => (
  listaDeFuncionalidades
    .map(func => HORAS_POR_FUNCIONALIDADE[func])
    .reduce((sum, currentValue) => sum + currentValue, valorInicial)
);

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;
