function calcularValorPorHora(rendaMensal) {
  const horasPorDia = 8;
  const diasPorSemana = 5;
  const semanasPorMes = 4;

  const totalDeHorasNoMes = horasPorDia * diasPorSemana * semanasPorMes;
  const valorPorHora = rendaMensal / totalDeHorasNoMes;

  return Math.round(valorPorHora);
}

module.exports = { calcularValorPorHora };