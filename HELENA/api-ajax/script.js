$(document).ready(function () {
  $("#botaoBuscaPersonagemAleatorioId").click(function () {
    buscarPersonagemAleatorio();
  });

  $("#botaoBuscaFilmeId").click(function () {
    var nomePersonagem = $("#buscaFilmePorNomePersonagemId").val();
    buscarFilmePorNomePersonagem(nomePersonagem);
  });

  function buscarPersonagemAleatorio() {
    $.get("https://swapi.dev/api/people/" + Math.floor(Math.random() * 82) + "/", preencherLabelPersonagemAleatorio);
  }

  function buscarFilmePorNomePersonagem(nomePersonagem) {
    $.get("https://swapi.dev/api/people/", { search: nomePersonagem }, function (response) {
      if (response.results.length > 0) {
        var personagem = response.results[0];
        var filmes = personagem.films;

        // Limpa a tabela antes de adicionar novos resultados
        $("#tabelaFilmesId").empty();
        
        filmes.forEach(function (filmeUrl) {
          $.get(filmeUrl, function (filme) {
            adicionarFilmeNaTabela(filme);
          });
        });

        // Atualiza o label com o nome do personagem
        $("#labelFilmeDeId").text(personagem.name);
      } else {
        alert("Personagem não encontrado");
      }
    });
  }

  function preencherLabelPersonagemAleatorio(personagem) {
    $("#personagemAleatorioId").text(personagem.name);
  }

  function adicionarFilmeNaTabela(filme) {
    // Adiciona uma nova linha na tabela com informações do filme
    $("#tabelaFilmesId").append(
      "<tr>" +
        "<td>" + filme.title + "</td>" +
        "<td>" + filme.episode_id + "</td>" +
        "<td>" + filme.director + "</td>" +
      "</tr>"
    );
  }
});
