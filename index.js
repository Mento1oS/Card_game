document.addEventListener('DOMContentLoaded', () => {
    const diffBox = document.querySelector('.diff__container');
    const diffButton = document.querySelector('.diff__button');
    let currentDifficultyBlock;
    const removeActivity = (block) => {
        if (!block) {
            return;
        }
        block.classList.remove('diff__active');
    }
    const addActivity = (block) => {
        block.classList.add('diff__active');
        window.difficulty = block.dataset.difficulty;
    }
    const difficultyChoice = (event) => {
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
            return
        }
        document.querySelector('.container').innerHTML = `<div>Пустышка</div>`;
    }
    diffBox.addEventListener('click', difficultyChoice);
    diffButton.addEventListener('click', gameStart);
});