const {
  HORAS_POR_DIA,
  DIAS_UTEIS_NO_MES
} = require('../constantes/constantes')

const calcularValorPorHora = (rendaMensal) => {
  const horasTrabalhadasPorMes = (HORAS_POR_DIA * DIAS_UTEIS_NO_MES);
  console.log("horasTrabalhadasPorMes", horasTrabalhadasPorMes);
  
  const valorPorHora = rendaMensal / horasTrabalhadasPorMes;
  console.log("valorPorHora", valorPorHora)
  return Math.ceil(valorPorHora);
};

exports.calcularValorPorHora = calcularValorPorHora;

