import visibleCardsComponent from "./pages/visCards";
import "../css/styles.css";
declare global {
  interface Window{
    app: HTMLElement;
    difficulty: number;
    gameArray: string[];
    cardsArray: string[]
  }}
window.app = document.querySelector(".app");
const startingScreenComponent = () => {
  window.difficulty = 0;
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
                <div class="button-container">
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
    window.difficulty = Number(block.dataset.difficulty);
  };
  const difficultyChoice = (event: MouseEvent) => {
    const target = event.target as HTMLImageElement;
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
  document.querySelector(".win-popup__replay").addEventListener("click", () => {
    document.querySelector(".win-popup__wrapper").classList.add("hidden");
    startingScreenComponent();
  });
  document.querySelector(".loss-popup__replay").addEventListener("click", () => {
    document.querySelector(".loss-popup__wrapper").classList.add("hidden");
    startingScreenComponent();
  });
});

export default startingScreenComponent;
