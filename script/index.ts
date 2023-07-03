import visibleCardsComponent from "./pages/visCards";
import "../css/styles.css";
declare const window: any;
window.app = document.querySelector(".app");
const startingScreenComponent = () => {
  document.querySelector(".app").innerHTML = `
        <div class="diff__wrapper">
            <div class="diff">
                <div class="diff__heading">
                    Выбери <br />
                    сложность
                </div>
                <div class="diff__container">
                    <div data-difficulty="1" class="diff__option">
                        1
                    </div>
                    <div data-difficulty="2" class="diff__option">
                        2
                    </div>
                    <div data-difficulty="3" class="diff__option">
                        3
                    </div>
                </div>
                <div class="button__container">
                    <button class="diff__button">Старт</button>
                </div>
            </div>
        </div>`;
  const diffBox = document.querySelector(".diff__container");
  const diffButton = document.querySelector(".diff__button");
  let currentDifficultyBlock: HTMLElement;
  const removeActivity = (block: HTMLElement) => {
    if (!block) {
      return;
    }
    block.classList.remove("diff__active");
  };
  const addActivity = (block: HTMLElement) => {
    block.classList.add("diff__active");
    window.difficulty = block.dataset.difficulty;
  };
  const difficultyChoice = (event: any) => {
    const target = event.target;
    if (target === diffBox) {
      return;
    }
    removeActivity(currentDifficultyBlock);
    currentDifficultyBlock = target;
    addActivity(currentDifficultyBlock);
  };
  const gameStart = () => {
    if (!window.difficulty) {
      return;
    }
    visibleCardsComponent();
  };
  diffBox.addEventListener("click", difficultyChoice);
  diffButton.addEventListener("click", gameStart);
};
document.addEventListener("DOMContentLoaded", () => {
  startingScreenComponent();
  document.querySelector(".winPopup__replay").addEventListener("click", () => {
    document.querySelector(".winPopup__wrapper").classList.add("hidden");
    startingScreenComponent();
  });
  document.querySelector(".lossPopup__replay").addEventListener("click", () => {
    document.querySelector(".lossPopup__wrapper").classList.add("hidden");
    startingScreenComponent();
  });
});

export default startingScreenComponent;
