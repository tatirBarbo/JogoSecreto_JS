let titulo = document.querySelector('h1');
titulo.innerHTML= 'Hora do Desafio';
let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Infome um número de 0 a 100';
function console1(){
    console.log('O botão foi clicado');
};
function alerta(){
    alert('Eu amo JS');
    console.log('Eu amo JS');
};
let cidadeBrasil;
function cidade(){
    cidadeBrasil = prompt('Informe uma cidade do Brasil:');
    alert(`Estive em ${cidadeBrasil} e lembrei de você`);
}