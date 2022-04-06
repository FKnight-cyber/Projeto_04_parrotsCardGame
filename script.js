startGame();

let cardStatus;
function startGame() {
    let qtdCartas = prompt("Com quantas cartas você quer jogar? (Informe um número par entre 4 e 14)");
    if (qtdCartas % 2 !== 0 || qtdCartas < 4 || qtdCartas > 14) {
        alert("Por favor, selecione um número de cartas par entre 4 e 14")
        qtdCartas = 0;
        startGame();
    } else {
        let lista = document.querySelector("lI");
        for (let i = 0; i < qtdCartas; i++) {
            lista.innerHTML += `
            <div class="card" onclick="chooseCard(this)">
                    <div class="front-face face">
                        <img class="item" src="images/front.png">
                    </div>
                    <div class="back-face face">
                        <img class="item game" src="images/bobrossparrot.gif">
                    </div>
                </div>
            `
        }
    }
}

function flipCard(elemento) {
    elemento.children[0].classList.add("flipped")
    elemento.children[1].classList.add("flipped")
}

function chooseCard(elemento) {
    flipCard(elemento);
    let card = document.querySelector(".game");
    console.log(card.src);
}
