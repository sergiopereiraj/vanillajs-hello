/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/* <div class="card">
  <div class="number spades">7</div>
</div>; */

window.onload = function() {
  let nroCards = document.querySelector("#nro_cards");
  let btnDraw = document.querySelector("#draw");
  let btnSort = document.querySelector("#sort");
  let randCards = document.querySelector(".random-cards");

  let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  let icons = ["spades", "cubs", "diamonds", "hearts"];
  let cards_generated = [];

  btnDraw.addEventListener("click", () => {
    let total = nroCards.value;
    if (total > 0) {
      cards_generated = [];
      while (total > 0) {
        let c = cards[Math.floor(Math.random() * cards.length)];
        let i = icons[Math.floor(Math.random() * icons.length)];
        cards_generated.push({ nro: c, icon: i });
        total--;
      }
      generateCard();
    }
  });

  btnSort.addEventListener("click", () => {
    drawCard(1, 1);
  });

  function generateCard() {
    randCards.innerHTML = "";
    cards_generated.forEach(card => {
      randCards.appendChild(drawCard(card));
    });
  }
  function drawCard(card) {
    let divCard = document.createElement("div");
    let divNumber = document.createElement("div");
    divCard.classList.add("card");
    divNumber.classList.add("number", card.icon);
    divNumber.innerHTML = changeValue(card.nro);
    divCard.appendChild(divNumber);

    return divCard;
  }
  function changeValue(nro) {
    switch (nro) {
      case 1:
        return "A";
      case 11:
        return "J";
      case 12:
        return "Q";
      case 13:
        return "K";
      default:
        return nro;
    }
  }
};
