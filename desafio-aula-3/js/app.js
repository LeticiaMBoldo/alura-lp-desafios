somarDoisNumeros();
delimitador();
apresentarNumeroSeparados();

function capturarValores() {
    let campoNome = document.getElementById('campoNome').value;
    let campoIdade = document.getElementById('campoIdade').value;

    let mensagem = `Seu nome é ${campoNome} e sua idade é ${campoIdade}`;

    console.log(mensagem);

    document.getElementById('mostrarNome').innerHTML = mensagem;
}

function modificarConteudo(){
    let textoModificador = document.getElementById('textoModificadoPara').value;
    
    document.getElementById('meuParagrafo').textContent = textoModificador;
}

function somarDoisNumeros() {
    let numero1 = 5;
    let numero2 = 3;

    let soma = parseInt(numero1 + numero2);

    console.log(`A soma dos valores ${numero1} e ${numero2} é ${soma}`);
}

function delimitador(){
    let frase = `O sucesso é a soma de pequenos esforços repetidos dia após dia;
    Grandes programadores não nascem sabendo, eles apenas nunca desistiram de aprender`
    let fraseSeparada = '';
    let itenSplit = frase.split(';');
    let tamanhoFrase = itenSplit.length;

    for (let i = 0; i <=(tamanhoFrase-1);i++){
        fraseSeparada = frase.split(';')[i];
        console.log(fraseSeparada)
    }
}

function apresentarNumeroSeparados(){
    let numeros = '3,4,5,9,10,60,15,45';
    let numeroSeparados = numeros.split(',');

    console.log(numeroSeparados);
}