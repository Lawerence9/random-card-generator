/* eslint-disable */
let cardType = ["♦", "♥", "♠", "♣"];
let cardNumber = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

let suit = document.querySelectorAll("#suit");
let card = document.getElementById("card");

window.onload = function() {
  let randomSuit = cardType[Math.floor(Math.random() * 4)];
  for (let i = 0; i < suit.length; i++) {
    suit[i].innerHTML = randomSuit;
    if (randomSuit === "♥" || randomSuit === "♦") {
      suit[i].classList.add("text-danger");
    }
  }
  if (randomSuit === "♥" || randomSuit === "♦") {
    card.classList.add("text-danger");
  }
  card.innerHTML = cardNumber[Math.floor(Math.random() * 13)];
};

let reloadButton = document.getElementById("reload");
function refresh() {
  window.location.reload();
}
reloadButton.addEventListener("click", refresh);
