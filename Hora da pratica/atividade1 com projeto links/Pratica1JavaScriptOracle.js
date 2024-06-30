// 1 Faça o download de outro projeto (<O Projeto esta na pasta atividade1 com projeto links>) e abra no Visual Studio.

// 2 Altere o conteudo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio:
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// 3 Crie uma função que exiba no console a mensagem "O botão foi clicado" sempre que o botão "Console" for pressionado.

//>> Resposta: No index.html , adicionamos no onclick o seguinte código:
// <button onclick="exibirMensagemNoConsole()" class="button">Console</button> // esse código é no index.html
function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!')
}

// 4 Crie uma função que exiba um alerta com a mensagem: " Eu amo JS", sempre que o botão "Alerta"for pressionado
//>> Resposta: NO index.html, adicionamos no onclick o seguinte código:
// <button onclick="exibirAlerta()" class="button">Alert</button> // esse código é no index.html
function exibirAlerta() {
    alert('Eu amo JS!')
}

// 5 Crie uma função que é executada quando o botão "prompt" é clicado, perguntando o nome de uma cidade do Brasil.
// Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: "Estive em {cidade} e lembrei de
// você."
// No index.html, adicionamos no onclick o seguinte código:
// <button onclick="exibirPrompt()" class="button">Prompt</button>
function  exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade no Brasil que vo~e gosta muito:')
    alert(`Estive em ${nomeDaCidade} e lebrei de você`)
}

// 6 Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta
// No index.html, adicionamos no onclick o seguinte código:
// <button onclick="exibirResultado()" class="button">Soma</button>
function exibirResultado() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}