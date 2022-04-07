startGame();

let cardStatus;
let click1;
let click2;
let escolhas = 0;
let acertou = 0;
let elemento2;
let qtdCartas;

function startGame() {
    let qtdCartas = prompt("Com quantas cartas você quer jogar? (Informe um número par entre 4 e 14)");
    if (qtdCartas % 2 !== 0 || qtdCartas < 4 || qtdCartas > 14) {
        alert("Por favor, selecione um número de cartas par entre 4 e 14")
        qtdCartas = 0;
        startGame();
    } else {
        addCard(qtdCartas);
    }
}

function addCard(qtdCartas) {
    const cartas = ['bobrossparrot.gif', 'bobrossparrot.gif', 'explodyparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif',
        'fiestaparrot.gif', 'metalparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'revertitparrot.gif',
        'tripletsparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif', 'unicornparrot.gif']

    const randomCards = [];
    let lista = document.querySelector("lI");

    for (let i = 0; i < qtdCartas; i++) {
        randomCards.push(cartas[i]);
    }

    randomCards.sort(embaralhar);

    for (let j = 0; j < randomCards.length; j++) {
        lista.innerHTML += `
        <div class="card" onclick="chooseCard(this)">
                <div class="front-face face">
                    <img class="item" src="images/front.png">
                </div>
                <div class="back-face face">
                    <img class="item game" src="images/${randomCards[j]}">
                </div>
            </div>
        `
    }
}

function embaralhar() {
    return Math.random() - 0.5;
}

function flipCard(elemento) {
    elemento.children[0].classList.add("flipped");
    elemento.children[1].classList.add("flipped");
}

function chooseCard(elemento) {
    flipCard(elemento);
    escolhas++;

    if (click1 === undefined) {
        click1 = elemento.children[1].querySelector(".game").src;

        elemento2 = elemento.querySelectorAll(".face");
    } else {
        click2 = elemento.children[1].querySelector(".game").src;
        if (click1 == click2) {
            acertou++
            click1 = undefined;
            click2 = undefined;
            setTimeout(function () {
                fimDoJogo();
            }, 1000);
        } else if (click1 != click2) {
            setTimeout(function () {
                elemento2[0].classList.remove("flipped");
                elemento2[1].classList.remove("flipped");
                elemento.children[0].classList.remove("flipped");
                elemento.children[1].classList.remove("flipped");

                click1 = undefined;
                click2 = undefined;
            }, 1000)
        }
    }

    function fimDoJogo() {
        let lista = document.querySelectorAll("li div");

        console.log(acertou)
        console.log(lista.length / 6)

        if (acertou == lista.length / 6) {
            alert(`Você ganhou em ${escolhas} rodadas!`);
        }
    }
}
