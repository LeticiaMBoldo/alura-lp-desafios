let amigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    let listaAmigo = document.getElementById('lista-amigos');
    
    if(nomeAmigo.value.trim() == ''){
        alert('Deve ser informado um nome para ser sorteado!');
        return;
    }

    if(amigos.includes(nomeAmigo.value.toUpperCase())) {
        alert('Nome já adicionado!');
        return;
    }

    amigos.push(nomeAmigo.value.toUpperCase());

    if(listaAmigo.textContent.trim() == ''){
        listaAmigo.textContent = `${nomeAmigo.value}`;
    } else {
        listaAmigo.textContent = `${listaAmigo.textContent} , ${nomeAmigo.value}`;
    }

    nomeAmigo.value = '';

    atualizarLista();
    atualizarSorteio();
}

function sortear() {

    if(amigos.length < 4){
        alert('O número minimo de participantes tem que ser maior ou igual a 4');
        return;
    }

    embaralha(amigos);

    let listaSorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if(i == amigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>'
        } else {
        listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

function excluirAmigo(index){
    amigos.splice(index,1);
    atualizarLista();
    atualizarSorteio();
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++){
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];

        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        })

        lista.appendChild(paragrafo);
    }
}