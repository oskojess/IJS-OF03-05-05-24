const { HORAS_POR_FUNCIONALIDADE } = require('../constantes/constantes');

const calcularHorasDeProjeto = (listaDeFuncionalidades) => (
// calculaHoras a partir de uma lista de funcionalidades
// cada funcionalidade  tem o tempo estimado a partir da constatnte
//lista de horas por funcionalidade ela está pre-definida banco de dados
//
listaDeFuncionalidades
    .map(func => HORAS_POR_FUNCIONALIDADE[func])
    .reduce((sum, currentValue) => sum + currentValue, 0)
);

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;
