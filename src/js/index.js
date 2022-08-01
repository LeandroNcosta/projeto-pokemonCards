const botaoVoltar = document.querySelector("#btn-seta-voltar");
const botaoAvancar = document.querySelector("#btn-seta-avancar");
const cards = document.querySelectorAll(".card"); //3;
let numCard = document.querySelector("#indice-card");

let cartaoAtual = 0;

function esconderCardSelecionado() {
  const cardSelecionado = document.querySelector(".select");
  cardSelecionado.classList.remove("select");
}

function mostrarCard(indiceCards) {
  cards[indiceCards].classList.add("select");
}

// AVANCAR

botaoAvancar.addEventListener("click", () => {
  // console.log("cartao atual:", cartaoAtual);
  // console.log("cards", cards.length - 1);

  if (cartaoAtual >= cards.length - 1) {
    cartaoAtual = -1; // zerar o indice e a seta passa a ser ciclica
  }

  esconderCardSelecionado();
  cartaoAtual++;
  mostrarCard(cartaoAtual);

  numCard.textContent = cartaoAtual;
});

// VOLTAR

botaoVoltar.addEventListener("click", () => {
  if (cartaoAtual === 0) {
    cartaoAtual = 3;
  }

  esconderCardSelecionado();
  cartaoAtual--;
  mostrarCard(cartaoAtual);

  numCard.textContent = cartaoAtual;
});
