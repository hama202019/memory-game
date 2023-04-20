const cardArray = [
  {
    name: "SpongeBob",
    src: "./img/spongeBob.webp",
  },
  {
    name: "Patrick",
    src: "./img/patrick.webp",
  },
  {
    name: "Squidward",
    src: "./img/squidward.webp",
  },
  {
    name: "MrKrabs",
    src: "./img/mrKrabs.webp",
  },
  {
    name: "SheldonPlankton",
    src: "./img/plankton.webp",
  },
  {
    name: "KarenPlankton",
    src: "./img/karen.webp",
  },
  {
    name: "Sandy",
    src: "./img/sandy.webp",
  },
  {
    name: "MrsPuff",
    src: "./img/mrsPuff.webp",
  },
  {
    name: "PearlKrabs",
    src: "./img/pearl.webp",
  },
  {
    name: "Gary",
    src: "./img/gary.webp",
  },
  {
    name: "SpongeBob",
    src: "./img/spongeBob.webp",
  },
  {
    name: "Patrick",
    src: "./img/patrick.webp",
  },
  {
    name: "Squidward",
    src: "./img/squidward.webp",
  },
  {
    name: "MrKrabs",
    src: "./img/mrKrabs.webp",
  },
  {
    name: "SheldonPlankton",
    src: "./img/plankton.webp",
  },
  {
    name: "KarenPlankton",
    src: "./img/karen.webp",
  },
  {
    name: "Sandy",
    src: "./img/sandy.webp",
  },
  {
    name: "MrsPuff",
    src: "./img/mrsPuff.webp",
  },
  {
    name: "PearlKrabs",
    src: "./img/pearl.webp",
  },
  {
    name: "Gary",
    src: "./img/gary.webp",
  },
];
const board = document.getElementById("board");
const startBtn = document.getElementById("startBtn");
const span = document.getElementById("span1");
const timeBtn = document.getElementById("timeBtn");
const btns = document.getElementById("btns");
const main = document.getElementById("main");
const restartBtn = document.getElementById("restartBtn");
let checkCards = [];
let checkCardsId = [];
let matchedCards = 0;
let waitToCheckCards = false;
shuffle(cardArray);
startBtn.addEventListener("click", showCards);
restartBtn.addEventListener("click", () => location.reload());

function setTimer() {
  const time = Number(prompt("Enter time in seconds"));
  span.textContent = time;
}
function theTimer() {
  span.textContent = 60;
  const setInt1 = setInterval(() => {
    if (!isNaN(span.textContent)) {
      span.textContent--;
    }
  }, 1000);
  setTimeout(() => {
    if (!isNaN(span.textContent)) {
      clearInterval(setInt1);
      youLost();
    }
  }, 60 * 1000 + 200);
}
function shuffle(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    const j = Math.floor(Math.random() * n);
    let current = arr[i];
    arr[i] = arr[j];
    arr[j] = current;
  }
}
function createCards(arr) {
  startBtn.style.display = "none";
  timeBtn.style.display = "none";
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    const card = document.createElement("img");
    card.setAttribute(
      "src",
      "./img/pirate.webp"
    );
    card.setAttribute("class", "allImages");
    card.setAttribute("id", i);
    board.appendChild(card);
  }
  board.style.display = "grid";
}
function showCards() {
  if (!span.textContent) {
    theTimer();
  } else {
    const setInt1 = setInterval(() => {
      span.textContent--;
    }, 1000);
    setTimeout(() => {
      clearInterval(setInt1);
      youLost();
    }, span.textContent * 1000 + 200);
  }
  createCards(cardArray);
  const cards = document.querySelectorAll("img");
  const n = cardArray.length;
  for (let i = 0; i < n; i++) {
    cards[i].setAttribute("src", cardArray[i].src);
    cards[i].setAttribute("id", i);
  }
  setTimeout(() => {
    for (let i = 0; i < n; i++) {
      cards[i].setAttribute(
        "src",
        "./img/pirate.webp"
      );
      cards[i].addEventListener("click", () => {
        if (!waitToCheckCards && cards[i].src) {
          cards[i].src = cardArray[cards[i].id].src;
          checkCards.push(cardArray[cards[i].id].name);
          checkCardsId.push(cards[i].getAttribute("id"));
          if (checkCardsId.length === 2) {
            waitToCheckCards = true;
            if (!checkCardsFunc()) {
              checkCards2Func();
            }
          }
        }
      });
    }
  }, 2000);
}
function youLost() {
  alert("You have lost");
  const n = cardArray.length;
  restartBtn.style.display = "block";
  restartBtn.style.color = "rgb(140, 41, 125)";
  const cards = document.querySelectorAll("img");
  for (let i = 0; i < n; i++) {
    if (cards[i].src) {
      cards[i].setAttribute(
        "src",
        "img/pirate.webp"
      );
    }
  }
  main.style.backgroundImage =
    "url('img/lostBg.webp')";
  main.style.backgroundSize = "cover";
  let opacity = 1;
  setInterval(() => {
    board.style.opacity = opacity;
    opacity -= 0.01;
  }, 50);
}
function checkCardsFunc() {
  const cards = document.querySelectorAll("img");
  if (checkCardsId[0] === checkCardsId[1]) {
    cards[checkCardsId[0]].setAttribute(
      "src",
      "./img/pirate.webp"
    );
    cards[checkCardsId[1]].setAttribute(
      "src",
      "./img/pirate.webp"
    );
    checkCardsId = [];
    checkCards = [];
    waitToCheckCards = false;
    return true;
  }
}
function checkCards2Func() {
  const cards = document.querySelectorAll("img");
  if (checkCards[0] === checkCards[1]) {
    setTimeout(() => {
      cards[checkCardsId[0]].removeAttribute("src");
      cards[checkCardsId[1]].removeAttribute("src");
      checkCards = [];
      checkCardsId = [];
      matchedCards += 2;
      waitToCheckCards = false;
      if (matchedCards === cardArray.length) youWin();
    }, 400);
  } else {
    setTimeout(() => {
      cards[checkCardsId[0]].setAttribute(
        "src",
        "./img/pirate.webp"
      );
      cards[checkCardsId[1]].setAttribute(
        "src",
        "./img/pirate.webp"
      );
      checkCards = [];
      checkCardsId = [];
      waitToCheckCards = false;
    }, 400);
  }
}
function youWin() {
  span.textContent += " !";
  board.style.display = "none";
  const youWin = document.getElementById("youWin");
  youWin.style.display = "block";
  const restart = document.getElementById("restart");
  const game = document.getElementById("game");
  restartBtn.style.display = "block";
  restart.style.color = "rgb(248, 248, 124)";
  game.style.color = "rgb(55, 150, 194)";
}
