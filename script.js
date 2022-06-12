//variaveis
//dados de entrada
//dados de saida
const elementoResposta = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#inputPergunta");
const botaoPerguntar = document.querySelector("#btnPerguntar");

const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
];

//gera meu numero aleatorio
function sorteiaNumero() {
  const totalRespostas = respostas.length;
  const numeroAlatorio = Math.floor(Math.random() * totalRespostas);

  return numeroAlatorio;
}

function fazerPergunta() {
  if (inputPergunta.value == "") {
    alert("Digite sua pergunta");
    return;
  }

  botaoPerguntar.setAttribute("disabled", true);

  const numeroAlatorio = sorteiaNumero();
  const pergunta = "<div>" + inputPergunta.value + "</div>";

  elementoResposta.innerHTML = pergunta + respostas[numeroAlatorio];

  elementoResposta.style.opacity = 1;

  setTimeout(function () {
    elementoResposta.style.opacity = 0;
    botaoPerguntar.removeAttribute("disabled");
  }, 3000);
}
