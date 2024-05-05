function calcularHorasDeProjeto(listaDeFuncionalidades) {
  let totalDeHoras = 0;

  listaDeFuncionalidades.forEach(funcionalidade => {
      switch(funcionalidade) {
          case "responsivo":
              totalDeHoras += 16;
              break;
          case "formulario":
              totalDeHoras += 16;
              break;
          case "otimizacao_seo":
              totalDeHoras += 16;
              break;
          default:
              break;
      }
  });

  return totalDeHoras;
}

module.exports = { calcularHorasDeProjeto };