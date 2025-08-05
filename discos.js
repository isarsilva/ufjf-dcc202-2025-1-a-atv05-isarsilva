let tabuleiro = ['preto', 'preto', 'preto', null, 'branco', 'branco', 'branco'];
let selecionado = null;

export function getTabuleiro() {
    return [...tabuleiro];
}

export function getSelecionado() {
    return selecionado;
}


export function selecionaOuMove(posicao, callbackAtualiza) {
    if (selecionado === null) {
        if (tabuleiro[posicao] !== null) {
            selecionado = posicao;
            callbackAtualiza();
        }
    } else {
        mover(selecionado, posicao);
        selecionado = null;
        callbackAtualiza();
    }
}


function mover(origem, destino) {
    if (tabuleiro[origem] === null) return;       
    if (tabuleiro[destino] !== null) return;      

   
    if (Math.abs(destino - origem) === 1) {
        tabuleiro[destino] = tabuleiro[origem];
        tabuleiro[origem] = null;
        return;
    }

    
    if (Math.abs(destino - origem) === 2) {
        const meio = (origem + destino) / 2;
        if (tabuleiro[meio] !== null) {
            tabuleiro[destino] = tabuleiro[origem];
            tabuleiro[origem] = null;
        }
    }
}