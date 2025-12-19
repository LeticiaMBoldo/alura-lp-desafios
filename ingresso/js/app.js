function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);


    let qtdCadSuperior = document.getElementById('qtd-superior');
    let qtdCadInferior =  document.getElementById('qtd-inferior');


    if(!tipo || tipo.value.trim() === ''){
        alert('Selecione um ingresso!');
        return;
    }

    if(isNaN(quantidade) || quantidade <= 0){
        alert('A quantidade de ingressos não pode ser inferior ou igual a 0');
        return;
    }

    if(tipo.value == 'pista') {
        comprarPista(quantidade);
    } else if (tipo.value == 'superior'){
        compraCadSuperior(quantidade);
    } else {
        compraCadInferior(quantidade);
    }

}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if(qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista!');
        return;
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');

    }
}

function compraCadSuperior(qtd) {
    let qtdCadSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if(qtd > qtdCadSuperior) {
        alert('Quantidade indisponível para tipo pista!');
        return;
    } else {
        qtdCadSuperior = qtdCadSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdCadSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function compraCadInferior(qtd) {
    let qtdCadInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if(qtd > qtdCadInferior) {
        alert('Quantidade indisponível para tipo pista!');
        return;
    } else {
        qtdCadInferior = qtdCadInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdCadInferior;
        alert('Compra realizada com sucesso!');
    }
}