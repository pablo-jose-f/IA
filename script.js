const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas =[
  {
    enunciado:"Pergunta1",
    alternativas:["Alternativa 1", "Alternativa 2"],
  
  },
  {
    enunciado: "Pergunta 2",
    alternativas:["Alternativa 1", "Alternativa 2"],
  },
  {
    enunciado: "Pergunta 3",
    alternativas:["Alternativa 1", "Alternativa 2"],
  },
  
  ];

let atual = 0;
let perguntaAtual;

function mostraPerguntas(){
  perguntaAtual = pergunta [atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  moatraAlternativas(){
}
mostraPerguntas();{
  or(const alternativa of perguntaAtual.alternativas){
  cont botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}
mostraPerguntas();
