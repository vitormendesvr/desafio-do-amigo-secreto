//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value;
    if (nomeAmigo == "") {
        alert ('Por favor, insira um nome.');
    } else {
    amigos.push(nomeAmigo);
    limparCampo ();
    console.log (amigos);
    adicionarLista();
    let resultadoSorteio = document.getElementById('resultado');
    resultadoSorteio.innerHTML = '';
    }
}

function limparCampo () {
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
    var lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
}




function adicionarLista() {

    // declarar lista e limpar o campo para não ter duplicados;
    var lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

// laço for para puxar cada nome;   
    for (let i = 0; i < amigos.length; i++) {
    let nomesAmigos = amigos[i];

// Criar elemento;
    var li = document.createElement('li');

// Criando o nó de texto de outra forma;
    li.textContent = nomesAmigos;

// Inserir (anexar) o elemento filho (li) ao elemento pai (lista);
    lista.appendChild(li);
}
}

function sortearAmigo () {
    if (amigos.length == 0) {
    alert ('Adicione um nome.');
    } else {
    let pessoaEscolhida = amigos[Math.floor((Math.random() * amigos.length))];
    let resultadoSorteio = document.getElementById('resultado');
    resultadoSorteio.innerHTML = 'O amigo secreto sorteador é: ' + pessoaEscolhida;
    // alert (pessoaEscolhida);
    limparCampo();
    amigos = [];
}
}