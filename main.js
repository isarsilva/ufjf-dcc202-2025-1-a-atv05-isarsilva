import { getTabuleiro, selecionaOuMove, getSelecionado } from "./discos.js";

const eTabuleiro = document.getElementById("tabuleiro");


atualizaTabuleiro();

function atualizaTabuleiro() {
    eTabuleiro.innerHTML = '';
    const tabuleiro = getTabuleiro();
    const selecionado = getSelecionado();

    for (let i = 0; i < 7; i++) {
        const casa = document.createElement("div");
        casa.classList.add("casa");

        
        casa.addEventListener("click", () => cliqueCasa(i));

        if (tabuleiro[i] !== null) {
            const disco = criaDisco(tabuleiro[i], i);
            if (selecionado === i) {
                disco.classList.add("selecionado");
            }
            casa.append(disco);
        }

        eTabuleiro.append(casa);
    }
}

function cliqueCasa(posicao) {
    selecionaOuMove(posicao, atualizaTabuleiro);
}

function criaDisco(cor, posicao) {
    const novoDisco = document.createElement("div");
    novoDisco.classList.add("disco");
    novoDisco.dataset.cor = cor;
    novoDisco.dataset.posicao = posicao;
    return novoDisco;
}