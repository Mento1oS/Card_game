function hiddenCardsComponent() {
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
    const fillDesk = (number) => {
        const container = document.querySelector(".cards__container");
        for (let i = 0; i < number; i++) {
            const elem = document.createElement("img");
            elem.setAttribute("src", `./img/рубашка.png`);
            elem.classList.add("card__pic");
            container.appendChild(elem);
        }
    }

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
}
