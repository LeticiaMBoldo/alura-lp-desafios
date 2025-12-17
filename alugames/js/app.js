let jogosAlugados = 0;

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');      
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    let concordar = confirmarDevolverOuAlugar(botao.textContent,nomeJogo.textContent);

    //alert(nomeJogo.textContent); //retornar o texto da tag

    if (!concordar){
        return;
    }

    //classList devolve todas as classes que tem no elemento.

    if(imagem.classList.contains('dashboard__item__img--rented')) { 
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
        
    } else {
        imagem.classList.add('dashboard__item__img--rented')
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }

    contarEExibirJogosAlugados();
}


function confirmarDevolverOuAlugar(tipo,nome) {
    let confirmar = '';

    if(tipo == 'Devolver') {
        confirmar = `Você deseja devolver o jogo ${nome}? Clique em OK para confirmar.`;
    } else {
        confirmar = `Você deseja alugar o jogo ${nome}? Clique em OK para confirmar.`;
    }

    return confirm(confirmar);


}

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});

essaPalavraEUmPalindromo();

//function declaration
function essaPalavraEUmPalindromo() {
    var palavra = "arvore";
    var separandoAsLetrasDaPalavra = palavra.split("");
    var palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");

    if(palavra == palavraInvertida) {
        console.log("A palavra " + palavra + " é um palíndromo!")
    } else {
        console.log("A palavra " + palavra + " não é um palíndromo!")
    }
}


// function expression
// const essaPalavraEUmPalindromo = function() {
//     var palavra = "radar";
//     var separandoAsLetrasDaPalavra = palavra.split("");
//     var palavraInvertida = separandoAsLetrasDaPalavra.reverse();
//     palavraInvertida = palavraInvertida.join("");

//     if(palavra == palavraInvertida) {
//         console.log("A palavra " + palavra + " é um palíndromo!")
//     } else {
//         console.log("A palavra " + palavra + " não é um palíndromo!")
//     }
// }

// essaPalavraEUmPalindromo();

function ordenarNumeros(a, b, c) {
    const numeros = [a,b,c].sort((x,y) => x - y);
    console.log(`Números ordenados: ${numeros.join(', ')}`);
}

ordenarNumeros(3,20,5);