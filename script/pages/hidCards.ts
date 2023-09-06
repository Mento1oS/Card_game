import startingScreenComponent from "../index";
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
                Начать заново!
            </button>
        </div>
    </header>
    <div class="cards__container"></div>
</div>`;
  const container = document.querySelector(".cards__container");
  let attempt = 0;
  let startSrc: string;
  const minElement = document.querySelector(".min");
  const secElement = document.querySelector(".sec");
  const indexArray: number[] = [];
  const fillDesk = (number: number) => {
    for (let i = 0; i < number; i++) {
      const elem = document.createElement("img");
      elem.setAttribute("src", `./static/img/рубашка.png`);
      elem.classList.add("card__pic");
      container.appendChild(elem);
    }
  };
  const secIncrease = () => {
    Number(secElement.textContent) > 8
      ? (secElement.textContent = String(
          (Number(secElement.textContent) + 1) % 60
        ))
      : (secElement.textContent =
          "0" + String(Number(secElement.textContent) + 1));
  };
  const minIncrease = () => {
    Number(minElement.textContent) > 8
      ? (minElement.textContent = String(Number(minElement.textContent) + 1))
      : (minElement.textContent =
          "0" + String(Number(minElement.textContent) + 1));
  };
  const checker = (event: MouseEvent) => {
    const target = event.target as HTMLImageElement;
    const tagName = target.tagName;
    if (tagName !== "IMG") {
      return;
    }
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
          clearInterval(secTimer);
          clearInterval(minTimer);
          document.querySelector(".winPopup__time").textContent =
            minElement.textContent + "." + secElement.textContent;
          document
            .querySelector(".winPopup__wrapper")
            .classList.remove("hidden");
        }
        return;
      } else {
        clearInterval(secTimer);
        clearInterval(minTimer);
        container.removeEventListener("click", checker);
        document.querySelector(".lossPopup__time").textContent =
          minElement.textContent + "." + secElement.textContent;
        document
          .querySelector(".lossPopup__wrapper")
          .classList.remove("hidden");
      }
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
  const secTimer = setInterval(secIncrease, 1000);
  const minTimer = setInterval(minIncrease, 60000);
  container.addEventListener("click", checker);
  document.querySelector(".replay__button").addEventListener("click", () => {
    startingScreenComponent();
    clearInterval(secTimer);
    clearInterval(minTimer);
  });
};
export default hiddenCardsComponent;
