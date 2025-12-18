let totalGeral = 0;
limpar();

function adicionar() {
    // recuperar os valores, nome do produto, quantidade e valores
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    if(!produto || produto.trim() === "") {
        alert("Selecione um porduto válido.");
        return;
    }

    if (isNaN(quantidade) || (quantidade <= 0)) {
        alert("Insera uma quantidade válida.");
        return;
    }

    let valorUnitario = produto.split('R$')[1].trim();
    let nomeProduto =  produto.split('-')[0].trim();

    //calcular o preço, valor unitário vezes a quantidade, subtotal
    let subtotal = parseFloat(quantidade * valorUnitario);
    console.log(subtotal);

    //adicional no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
                                <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
                            </section>`;

    //atualizar o total de todas as compras
    totalGeral = totalGeral + subtotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`; 

    document.getElementById('quantidade').value = 0;
}



function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = ' R$ 0';
}

