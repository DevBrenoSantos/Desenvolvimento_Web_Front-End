// Variáveis e Tipos de Dados
var numero = 42;
var texto = "Olá, Mundo!";
var booleano = true;
var array = [1, 2, 3];
var objeto = { chave: "valor" };

// Estruturas de Controle
if (condicao) {
    // código a ser executado se a condição for verdadeira
} else {
    // código a ser executado se a condição for falsa
}

for (var i = 0; i < 5; i++) {
    // código a ser repetido em um loop for
}

// Funções
function minhaFuncao(parametro) {
    // código da função
    return resultado;
}

// Objetos e Propriedades
var pessoa = { nome: "João", idade: 30 };
console.log(pessoa.nome);

// Eventos e Manipulação do DOM
elemento.addEventListener("click", function() {
    // código a ser executado em resposta a um evento de clique
});

// Arrays
var frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]);

// AJAX e Requisições HTTP
// Código para fazer uma requisição HTTP

// Tratamento de Erros
try {
    // código que pode gerar um erro
} catch (erro) {
    // código para lidar com o erro
}

// Escopo e Closure
var global = "global";

function funcaoExterna() {
    var local = "local";
    
    function funcaoInterna() {
        console.log(local);
    }
    
    return funcaoInterna;
}

// Classes e Herança
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    fazerBarulho() {
        console.log(this.nome + " faz barulho");
    }
}

// Promises e Async/Await
// Código com Promises e Async/Await

// Manipulação de Strings, Arrays e Objetos
var frase = "Isso é uma frase.";
var arrayManipulado = [1, 2, 3].map(function(item) {
    return item * 2;
});

// Manipulação de Tempo
setTimeout(function() {
    // código a ser executado após um atraso
}, 1000);

setInterval(function() {
    // código a ser executado repetidamente a cada intervalo
}, 2000);