import hiddenCardsComponent from "./hidCards";
import startingScreenComponent from "../index";
const visibleCardsComponent = () => {
  window.cardsArray = [
    "6 бубны.png",
    "7 бубны.png",
    "8 бубны.png",
    "9 бубны.png",
    "10 бубны.png",
    "валет бубны.png",
    "дама бубны.png",
    "король бубны.png",
    "туз бубны.png",
    "6 крести.png",
    "7 крести.png",
    "8 крести.png",
    "9 крести.png",
    "10 крести.png",
    "валет крести.png",
    "дама крести.png",
    "король крести.png",
    "туз крести.png",
    "6 пики.png",
    "7 пики.png",
    "8 пики.png",
    "9 пики.png",
    "10 пики.png",
    "валет пики.png",
    "дама пики.png",
    "король пики.png",
    "туз пики.png",
    "6 черви.png",
    "7 черви.png",
    "8 черви.png",
    "9 черви.png",
    "10 черви.png",
    "валет черви.png",
    "дама черви.png",
    "король черви.png",
    "туз черви.png",
  ];
  window.app.innerHTML = `<div class="card-table center">
    <header class="header">
        <div class="timer">
            <div class="min__label">min</div>
            <div></div>
            <div class="sec__label">sec</div>
            <div class="min">00</div>
            <div class="dot">.</div>
            <div class="sec">05</div>
        </div>
        <div class="replay">
            <button class="replay__button">
                Начать заново
            </button>
        </div>
    </header>
    <div class="cards__container"></div>
</div>`;
  function shuffle(array: string[]) {
    array.sort(() => Math.random() - 0.5);
  }
  const countdown = () => {
    document.querySelector(".sec").textContent =
      "0" + String(Number(document.querySelector(".sec").textContent) - 1);
  };
  const fillDesk = (number: number) => {
    const container = document.querySelector(".cards__container");
    const chosenCards: string[] = [];
    while (chosenCards.length < number / 2) {
      const pic =
        window.cardsArray[Math.floor(Math.random() * window.cardsArray.length)];
      if (!chosenCards.includes(pic)) {
        chosenCards.push(pic);
      }
    }
    window.gameArray = [...chosenCards, ...chosenCards];
    shuffle(window.gameArray);
    for (let i = 0; i < window.gameArray.length; i++) {
      const elem = document.createElement("img");
      elem.setAttribute("src", `./static/img/${window.gameArray[i]}`);
      elem.classList.add("card-pic");
      container.appendChild(elem);
    }
  };
  switch (window.difficulty) {
    case 3:
      fillDesk(18);
      break;
    case 2:
      fillDesk(12);
      break;
    case 1:
      fillDesk(6);
      break;
    default:
      break;
  }
  const timer = setInterval(countdown, 1000);
  const timeout = setTimeout(() => {
    hiddenCardsComponent();
    clearInterval(timer);
  }, 5000);
  document.querySelector(".replay__button").addEventListener("click", () => {
    clearInterval(timer);
    clearTimeout(timeout);
    startingScreenComponent();
  });
};
export default visibleCardsComponent;
