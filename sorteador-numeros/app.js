function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    let numero;

    let resultado = document.getElementById('resultado');

    if (de > ate) {
        alert('O valor do campo "Do número" é maior que o valor "Até o número", impossível continuar, informe um valor correto!');
        //reiniciar();
        return;
    }

    if (quantidade > (ate - de +1)) {
        alert('O campo "Quantidade de números" é maior que o intervalo de numero dos campos "Do número" até o "Até o número", impossível continuar, informe um valor correto!');
        return;
    }

    for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de , ate);

    while(sorteados.includes(numero)) {
        numero = obterNumeroAleatorio(de, ate);
    }


        sorteados.push(numero);
    }

    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`

    alterarStatusBotao();
    
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');

    if(botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}