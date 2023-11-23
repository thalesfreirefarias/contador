let botao = document.querySelector('button');
var nome = prompt("Digite o seu nome!");
botao.addEventListener('click', somarUm);

function somarUm() {
    let elementoH3 = document.querySelector('h3');
    let valorAtual = parseInt(elementoH3.textContent);
    let novoValor = valorAtual + 1;
    elementoH3.textContent = novoValor;

    let r = parseInt(Math.random() * 256);
    let g = parseInt(Math.random() * 256);
    let b = parseInt(Math.random() * 256);

    elementoH3.style.color = `rgb(${r},${g},${b})`;
}