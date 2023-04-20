const cardArray = [
  {
    name: "SpongeBob",
    src: "https://static.wikia.nocookie.net/nickelodeon/images/7/79/SpongeBob-SquarePants.jpg/revision/latest?cb=20180104021451",
  },
  {
    name: "Patrick",
    src: "https://static.wikia.nocookie.net/nickelodeon/images/9/9e/SpongeBob-Patrick.jpg/revision/latest?cb=20180104021928",
  },
  {
    name: "Squidward",
    src: "https://static.wikia.nocookie.net/nickelodeon/images/f/fe/SpongeBob-Squidward.jpg/revision/latest?cb=20180104021929",
  },
  {
    name: "MrKrabs",
    src: "https://static.wikia.nocookie.net/nickelodeon/images/e/e2/SpongeBob-Mr-Krabs.jpg/revision/latest?cb=20180104021929",
  },
  {
    name: "SheldonPlankton",
    src: "https://static.wikia.nocookie.net/nickelodeon/images/4/42/SpongeBob-Plankton.jpg/revision/latest?cb=20180104021930",
  },
  {
    name: "KarenPlankton",
    src: "https://static.wikia.nocookie.net/nickelodeon/images/4/49/SpongeBob-Karen.jpg/revision/latest?cb=20180104021930",
  },
  {
    name: "Sandy",
    src: "https://static.wikia.nocookie.net/nickelodeon/images/6/65/SpongeBob-Sandy.jpg/revision/latest?cb=20180104021931",
  },
  {
    name: "MrsPuff",
    src: "https://static.wikia.nocookie.net/nickelodeon/images/a/ad/SpongeBob-Mrs-Puff.jpg/revision/latest?cb=20180104021932",
  },
  {
    name: "PearlKrabs",
    src: "https://static.wikia.nocookie.net/nickelodeon/images/3/31/SpongeBob-Pearl.jpg/revision/latest?cb=20180104021931",
  },
  {
    name: "Gary",
    src: "https://static.wikia.nocookie.net/nickelodeon/images/1/11/SpongeBob-Gary.jpg/revision/latest?cb=20180104021932",
  },
  {
    name: "SpongeBob",
    src: "https://static.wikia.nocookie.net/nickelodeon/images/7/79/SpongeBob-SquarePants.jpg/revision/latest?cb=20180104021451",
  },
  {
    name: "Patrick",
    src: "https://static.wikia.nocookie.net/nickelodeon/images/9/9e/SpongeBob-Patrick.jpg/revision/latest?cb=20180104021928",
  },
  {
    name: "Squidward",
    src: "https://static.wikia.nocookie.net/nickelodeon/images/f/fe/SpongeBob-Squidward.jpg/revision/latest?cb=20180104021929",
  },
  {
    name: "MrKrabs",
    src: "https://static.wikia.nocookie.net/nickelodeon/images/e/e2/SpongeBob-Mr-Krabs.jpg/revision/latest?cb=20180104021929",
  },
  {
    name: "SheldonPlankton",
    src: "https://static.wikia.nocookie.net/nickelodeon/images/4/42/SpongeBob-Plankton.jpg/revision/latest?cb=20180104021930",
  },
  {
    name: "KarenPlankton",
    src: "https://static.wikia.nocookie.net/nickelodeon/images/4/49/SpongeBob-Karen.jpg/revision/latest?cb=20180104021930",
  },
  {
    name: "Sandy",
    src: "https://static.wikia.nocookie.net/nickelodeon/images/6/65/SpongeBob-Sandy.jpg/revision/latest?cb=20180104021931",
  },
  {
    name: "MrsPuff",
    src: "https://static.wikia.nocookie.net/nickelodeon/images/a/ad/SpongeBob-Mrs-Puff.jpg/revision/latest?cb=20180104021932",
  },
  {
    name: "PearlKrabs",
    src: "https://static.wikia.nocookie.net/nickelodeon/images/3/31/SpongeBob-Pearl.jpg/revision/latest?cb=20180104021931",
  },
  {
    name: "Gary",
    src: "https://static.wikia.nocookie.net/nickelodeon/images/1/11/SpongeBob-Gary.jpg/revision/latest?cb=20180104021932",
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
      "https://static.wikia.nocookie.net/nickelodeon/images/9/91/Painty_the_Pirate.png/revision/latest?cb=20180104022457"
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
        "https://static.wikia.nocookie.net/nickelodeon/images/9/91/Painty_the_Pirate.png/revision/latest?cb=20180104022457"
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
        "https://static.wikia.nocookie.net/nickelodeon/images/4/40/Flying_Duchman_Season_11.png/revision/latest?cb=20180925030939"
      );
    }
  }
  main.style.backgroundImage =
    "url('https://static.wikia.nocookie.net/nickelodeon/images/8/82/Image-1597542915.jpg/revision/latest?cb=20200816015516')";
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
      "https://static.wikia.nocookie.net/nickelodeon/images/9/91/Painty_the_Pirate.png/revision/latest?cb=20180104022457"
    );
    cards[checkCardsId[1]].setAttribute(
      "src",
      "https://static.wikia.nocookie.net/nickelodeon/images/9/91/Painty_the_Pirate.png/revision/latest?cb=20180104022457"
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
      // cards[checkCardsId[0]].removeEventListener('click');
      // cards[checkCardsId[1]].removeEventListener('click');
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
        "https://static.wikia.nocookie.net/nickelodeon/images/9/91/Painty_the_Pirate.png/revision/latest?cb=20180104022457"
      );
      cards[checkCardsId[1]].setAttribute(
        "src",
        "https://static.wikia.nocookie.net/nickelodeon/images/9/91/Painty_the_Pirate.png/revision/latest?cb=20180104022457"
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
