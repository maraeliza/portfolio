$(document).ready(function () {
  // Carregar os dados do JSON

  $.getJSON("dados.json", function (dadosJson) {
    montarSite(dadosJson);
  }).fail(function () {
    console.error("Erro ao carregar dados.");
    montarSite(dados);
  });
});
function montarSite(data) {
  // Exibir Resumo Profissional
  $("#resumo-profissional").text(data.resumo.descricao);

  // Exibir Educação
  const educacaoContainer = $("#educacao");
  data.educacao.forEach((curso) => {
    const cursoElement = `
         <div class="card mb-3">
           <div class="card-body">
             <h5 class="card-title">${curso.curso}</h5>
             <p class="card-text">${curso.instituicao}</p>
             <p class="card-text">${curso.inicio} - ${curso.fim}</p>
           </div>
         </div>
       `;
    educacaoContainer.append(cursoElement);
  });

  // Exibir Experiência Profissional
  const experienciaContainer = $("#experiencia-profissional");
  data.experiencia.forEach((experiencia) => {
    const expElement = `
         <div class="card mb-3">
           <div class="card-body">
             <h5 class="card-title">${experiencia.cargo} - ${
      experiencia.empresa || experiencia.instituicao
    }</h5>
             <p class="card-text">${experiencia.periodo}</p>
             <ul>${experiencia.atividades
               .map((atividade) => `<li>${atividade}</li>`)
               .join("")}</ul>
           </div>
         </div>
       `;
    experienciaContainer.append(expElement);
  });
}
