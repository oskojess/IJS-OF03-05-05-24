const { HORAS_POR_FUNCIONALIDADE } = require('../constantes/constantes');

const valorInicial = 0;

const calcularHorasDeProjeto = (listaDeFuncionalidades) => (
  listaDeFuncionalidades
    .map(func => HORAS_POR_FUNCIONALIDADE[func])
    .reduce((sum, currentValue) => sum + currentValue, valorInicial)
);

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;
