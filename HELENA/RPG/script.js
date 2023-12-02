var vidaGuerreiro = 50;
var danoGuerreiro = 10;
var vidaArqueiro = 30;
var danoArqueiro = 20;
var vidaMago = 20;
var danoMago = 30;


var imagemGuerreiro = "img/Guerreiro.png";
var imagemArqueiro = "img/Arqueiro.png";
var imagemMago = "img/Mago.png";



function Personagem(classe, vida, dano, imagem) {
    this.classe = classe;
    this.vida = vida;
    this.dano = dano;
    this.imagem = imagem;
  
  }

var personagemGuerreiro;

var personagemArqueiro;

var personagemMago;

var personagens;

function criarPersonagens() {
    personagemGuerreiro = new Personagem("Guerreiro", vidaGuerreiro, danoGuerreiro, imagemGuerreiro);
    personagemArqueiro = new Personagem("Arqueiro", vidaArqueiro, danoArqueiro, imagemArqueiro);
    personagemMago = new Personagem("Mago", vidaMago, danoMago, imagemMago);
    personagens = [personagemGuerreiro, personagemArqueiro, personagemMago]; 
  }

criarPersonagens();

var pontosParaEvolucao = 1;
var pontosAoEvoluir = 5;

function atualizarPontosEvolucao() {
    $("#pontosEvolucaoid").html(pontosParaEvolucao);
    atualizarButtonDisabled();
  
  }
  function atualizarButtonDisabled() {
    if(pontosParaEvolucao <= 0) {
     $(".botaoUpdate").attr("disabled", true);
    }
    else {
      $(".botaoUpdate").attr("disabled", false);
    }
  
  }

  function evoluirDano(classe) {
    pontosParaEvolucao -= 1;
  
    switch(classe) {
      case "guerreiro":
        danoGuerreiro += pontosAoEvoluir;
        $("#GuerreiroDanoId").html(danoGuerreiro);
        break;
      case "arqueiro":
        danoArqueiro += pontosAoEvoluir;
        $("#ArqueiroDanoId").html(danoArqueiro);
        break;
      case "mago":
  
        danoMago += pontosAoEvoluir;
  
        $("#MagoDanoId").html(danoMago);
  
        break;
  
    }
  
    atualizarPontosEvolucao();
  
  }
  
  
  function evoluirVida(classe) {
  
    pontosParaEvolucao -= 1;
  
   
  
    switch(classe) {
  
      case "guerreiro":
        vidaGuerreiro += pontosAoEvoluir;
        $("#GuerreiroVidaId").html(vidaGuerreiro);
        break;
      case "arqueiro":
        vidaArqueiro += pontosAoEvoluir;
        $("#ArqueiroVidaId").html(vidaArqueiro);
        break;
      case "mago":
        vidaMago += pontosAoEvoluir;
        $("#MagoVidaId").html(vidaMago);
        break;
  
    }
  
    atualizarPontosEvolucao()
  }

  
function Inimigo(nome, vida, dano, imagem) {
  this.nome = nome;
  this.vida = vida;
  this.dano = dano;
  this.imagem = imagem;

}

var inimigos = [];

function criarInimigos() {
  var orc = new Inimigo("Orc", 20, 10, "img/Orc.png");
  var orcShaman = new Inimigo("Orc Shaman", 20, 30, "img/OrcShaman.png");
  var orcChefe = new Inimigo("Orc Chefe", 50, 10, "img/OrcChefe.png");
  var orcs = [orc, orcShaman, orcChefe];

  var esqueleto = new Inimigo("Esqueleto", 10, 20, "img/Esqueleto.png");
  var zumbi = new Inimigo("Zumbi", 20, 30, "img/Zumbi.png");
  var zumbiChefe = new Inimigo("Zumbi Chefe", 30, 50, "img/ZumbiChefe.png");
  var mortosvivos = [esqueleto, zumbi, zumbiChefe];

  var imp = new Inimigo("Imp", 20, 20, "img/Imp.png");
  var demonio = new Inimigo("Demônio", 30, 30, "img/Demonio.png");
  var demonioChefe = new Inimigo("Demônio Chefe", 50, 40, "img/DemonioChefe.png");
  var demonios = [imp, demonio, demonioChefe];
  
  inimigos = [orcs, mortosvivos, demonios];

}


var indexPersonagem = 1;
var indexGrupoInimigos;
var indexInimigoAlvo;


function selecionarInimigos() {
  indexGrupoInimigos = $("#selecaoInimigosId").val();
  var htmlOptions = "";
  for(var i=0; i<3;i++) {
     htmlOptions += "<option value=" + i + ">" + inimigos[indexGrupoInimigos][i].nome + "</option>";
  }
  $("#inimigosEscolhidosId").html(htmlOptions);
  atualizarDadosAlvo();

}


function atualizarDadosAlvo() {
  indexInimigoAlvo = parseInt($("#inimigosEscolhidosId").val());

  $("#vidaInimigoId").html(inimigos[indexGrupoInimigos][indexInimigoAlvo].vida);
  $("#danoInimigoId").html(inimigos[indexGrupoInimigos][indexInimigoAlvo].dano);
  $("#imagemInimigoId").attr("src", inimigos[indexGrupoInimigos][indexInimigoAlvo].imagem);

}




function iniciarBatalha() {
  criarPersonagens();
  criarInimigos();
  atualizarDadosPersonagem();
  selecionarInimigos();


}

function atualizarDadosPersonagem() {
  $("#vidaPersonagemId").html(personagens[indexPersonagem].vida);
  $("#danoPersonagemId").html(personagens[indexPersonagem].dano);
  $("#imagemPersonagemId").attr("src", personagens[indexPersonagem].imagem);

}
function selecionarPersonagem() {
  indexPersonagem = parseInt($("#personagemEscolhidoId").val());
  atualizarDadosPersonagem();

}

var porcentagemInimigo = 50;

function Atacar() {

  var htmlFinal = "";

 

  // Personagem mort

  if(personagens[indexPersonagem].vida <= 0) {
    htmlFinal = personagens[indexPersonagem].classe + " está morto, ataque com outro personagem";

  }

  // Inimigo morrgot

  else if(inimigos[indexGrupoInimigos][indexInimigoAlvo].vida <= 0) {
    htmlFinal = inimigos[indexGrupoInimigos][indexInimigoAlvo].nome + " já esta morto, ataque outro inimigo";

  }

  // Posso atacar

  else {


    // Ataque do personagem, 100% acerto
    inimigos[indexGrupoInimigos][indexInimigoAlvo].vida -= personagens[indexPersonagem].dano;
    // Montagem do dano do personagem no inimigo
    htmlFinal = inimigos[indexGrupoInimigos][indexInimigoAlvo].nome + 
                           " recebeu " +
                           personagens[indexPersonagem].dano + 
                           " de dano. ";
  

    if(inimigos[indexGrupoInimigos][indexInimigoAlvo].vida <= 0) {
      htmlFinal += inimigos[indexGrupoInimigos][indexInimigoAlvo].nome +
        " foi de base "
      inimigos[indexGrupoInimigos][indexInimigoAlvo].vida = 0;

    }


      // Ataque do inimigo, 50% de chance de acertar

    if(Math.floor(Math.random() * 100) < porcentagemInimigo) {


      // Se acertar diminuiu vida do personagem

      personagens[indexPersonagem].vida -= inimigos[indexGrupoInimigos][indexInimigoAlvo].dano;


      // Cria mensagem

      htmlFinal += personagens[indexPersonagem].classe + 

        " recebeu " + inimigos[indexGrupoInimigos][indexInimigoAlvo].dano +

        " de dano. ";


      // Verifica se personagem morreu, se sim cria mensagem

      if(personagens[indexPersonagem].vida <= 0) {

        personagens[indexPersonagem].vida = 0;

        htmlFinal += personagens[indexPersonagem].classe + " morreu. "

      }

    }


    // Verifica se todos inimigos estão mortos

    var todosInimigosEstaoMortos = verificaTodosInimigosMortos();

    if(todosInimigosEstaoMortos) {

      htmlFinal += "Todos inimigos mortos, pode saquear os pontos de evolução.";

     

      // Se morreu, habilita botão se saquear

      $("#botaoSaquearId").attr("disabled", false);

    }

     

  }

 

  atualizarDadosPersonagem();

  atualizarDadosAlvo();


  // Mostra mensagem 

  $("#resultadoId").html(htmlFinal);

 

}

function verificaTodosInimigosMortos() {
  for(var i = 0; i < inimigos[indexGrupoInimigos].length; i++) {
    if(inimigos[indexGrupoInimigos][i].vida > 0) {
      return false;

    }

  }

  return true;

}


function Saquear() {
  pontosParaEvolucao += 1;
  atualizarPontosEvolucao();
  $("#botaoSaquearId").attr("disabled", true);

}
