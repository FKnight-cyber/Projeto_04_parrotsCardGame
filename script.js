startGame();

let cardStatus;
let click1;
let click2;
let escolhas = 0;
let acertou = 0;
let elemento2;
let elementoArmazenado;
let checkElemento;
let qtdCartas;
let lastClick = 0;
let delay = 700;

function startGame() {
    resetarCartas();
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
        <div class="card" type"button" onclick="chooseCard(this)">
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

function resetarCartas() {
    let lista = document.querySelector("lI");
    lista.innerHTML = "";
}

function embaralhar() {
    return Math.random() - 0.5;
}

function flipCard(elemento) {
    elemento.children[0].classList.add("flipped");
    elemento.children[1].classList.add("flipped");
}

function chooseCard(elemento) {

    if (lastClick >= (Date.now() - delay)) {
        return;
    } else {
        flipCard(elemento);
        console.log(elemento.onclick = "#");

        if (click1 === undefined) {
            escolhas++;
            click1 = elemento.children[1].querySelector(".game").src;

            elemento2 = elemento.querySelectorAll(".face");
            checkElemento = elemento.children;
            elementoArmazenado = elemento;
        } else {
            click2 = elemento.children[1].querySelector(".game").src;
            if (click1 == click2 && elemento.children !== checkElemento) {
                escolhas++;
                acertou++
                elemento.onclick = "#";
                elementoArmazenado.onclick = "#";
                click1 = undefined;
                click2 = undefined;
                setTimeout(function () {
                    fimDoJogo();
                }, 1000);
            } else if (click1 != click2) {
                setTimeout(function () {
                    escolhas++;
                    elemento2[0].classList.remove("flipped");
                    elemento2[1].classList.remove("flipped");
                    elemento.children[0].classList.remove("flipped");
                    elemento.children[1].classList.remove("flipped");

                    click1 = undefined;
                    click2 = undefined;
                }, 1000)
            }
        }
    }
    console.log(acertou);
    console.log(escolhas);
    lastClick = Date.now();
}

function fimDoJogo() {
    let lista = document.querySelectorAll("li div");

    if (acertou == lista.length / 6) {
        alert(`Você ganhou em ${escolhas} jogadas!`);
        acertou = 0;
        escolhas = 0;
        setTimeout(function () {
            playAgain();
        }, 1500)
    }
}

function playAgain() {
    let check = prompt("Você gostaria de jogar novamente? (sim ou não)");

    if (check === 'sim') {
        alert("Vamos lá!");
        setTimeout(function () {
            startGame();
        }, 1500)
    } else if (check === 'não') {
        alert("Volte sempre!")
    } else {
        playAgain();
    }
}


