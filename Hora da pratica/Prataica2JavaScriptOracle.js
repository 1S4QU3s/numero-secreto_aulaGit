// 1 Criar uma função que exibe "Olá, mundo" no console.
function exibeMensaj() {
    console.log('Olá, mundo!');
}
exibeMensaj();

// 2 Criar uma função que recebe um nome como parâmetro e exive "Olá,[nome]" no console.
function exibirNome(nome) {
    console.log(`Olá ${nome}`) 
}
exibirNome('João');

// 3 Criar uma função que recebe um número como parâmetro e retorna o dobro desse número
function CalcularNumeroDobrado(numero) {
    return numero * 2;
}
let resultadoDobro = CalcularNumeroDobrado(5);
console.log(resultadoDobro);

// 4 Criar uma função que recebe três números como parâmetros e retorna a média deles
function CalcularMedia(a, b, c) {
    return (a + b + c) /3;
}
let media = CalcularMedia(4, 7, 10);
console.log(media);

// 5 Criar uma função que recebe dois números como parâmetros e retorna o maior deles
function encontrarMaior (a, b){
    return a > b ? a : b;
}
let maiorNumero = encontrarMaior (15, 9);
console.log(maiorNumero);

// 6 Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse 
// número por ele mesmo.
function quadrado(numero) {
    return numero * numero;
}
let resultado = quadrado(2);
console.log(resultado);

