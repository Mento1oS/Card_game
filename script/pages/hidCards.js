import startingScreenComponent from "../index.js";
const hiddenCardsComponent = () => {
  window.app.innerHTML = `<div class="cardTable center">
    <header class="header">
        <div class="timer">
            <div class="min__label">min</div>
            <div></div>
            <div class="sec__label">sec</div>
            <div class="min">00</div>
            <div class="dot">.</div>
            <div class="sec">00</div>
        </div>
        <div class="replay">
            <button class="replay__button">
                Начать заново
            </button>
        </div>
    </header>
    <div class="cards__container"></div>
</div>`;
  const container = document.querySelector(".cards__container");
  let attempt = 0;
  let startSrc;
  const indexArray = [];
  const fillDesk = (number) => {
    for (let i = 0; i < number; i++) {
      const elem = document.createElement("img");
      elem.setAttribute("src", `./static/img/рубашка.png`);
      elem.classList.add("card__pic");
      container.appendChild(elem);
    }
  };
  const checker = (event) => {
    if (event.target.tagName !== "IMG") {
      return;
    }
    const target = event.target;
    const index = Array.from(target.parentElement.children).indexOf(target);
    if (indexArray.includes(index)) {
      return;
    }
    attempt++;
    indexArray.push(index);
    console.log(index);
    target.setAttribute("src", `./static/img/${window.gameArray[index]}`);
    if (attempt % 2 !== 0) {
      startSrc = window.gameArray[index];
    } else {
      if (startSrc === window.gameArray[index]) {
        if (attempt === window.gameArray.length) {
          alert("Поздравляю, Вы выиграли");
        }
        return;
      } else {
        container.removeEventListener("click", checker);
        alert("Вы проиграли");
      }
    }
  };
  switch (window.difficulty) {
    case "3":
      fillDesk(18);
      break;
    case "2":
      fillDesk(12);
      break;
    case "1":
      fillDesk(6);
      break;
    default:
      break;
  }
  container.addEventListener("click", checker);
  document.querySelector(".replay__button").addEventListener("click", () => {
    startingScreenComponent();
  });
};
export default hiddenCardsComponent;
