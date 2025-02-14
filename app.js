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
    }
}

function limparCampo () {
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}

let lista = document.getElementById('listaAmigos');
lista.innerHTML = '';
let indice = 0;
let nomesAmigos = amigos[indice];
//for (indice = 0, indice < amigos.length; indice++) {}