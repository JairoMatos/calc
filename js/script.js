//funcao para aramzenar querySelector()
const dS = (e) => document.querySelector(e);

//pegando as classe dos decimais
const n0 = dS('.n0');
const n1 = dS('.n1');
const n2 = dS('.n2');
const n3 = dS('.n3');
const n4 = dS('.n4');
const n5 = dS('.n5');
const n6 = dS('.n6');
const n7 = dS('.n7');
const n8 = dS('.n8');
const n9 = dS('.n9');

//pegando as classes dos operadores
const soma      = dS('.soma');
const div       = dS('.div');
const mult      = dS('.mult');
const sub       = dS('.sub');
const nPonto    = dS('.nPonto');
const result    = dS('.nRes');
const clear     = dS('.clear');
const pot       = dS('.pot');
const percent   = dS('.percent');

//pegando as classes dos displays
const miniDisplay = dS('.miniDisplay');
const display     = dS('.display');
const imcDisplay  = dS('.displayImc');

//variaveis de controles para operacoes matematicas
let num1;
let num2;
let operador;
let total;


//criando os eventos dos botoes decimais
clear.addEventListener('click', function(){
    display.innerHTML = '';
    miniDisplay.innerHTML = ''; 
})
n1.addEventListener('click', () => {
    display.innerHTML += 1;
    miniDisplay.innerHTML += 1;
}) 
n2.addEventListener('click', () => {
    display.innerHTML += 2;
    miniDisplay.innerHTML += 2;
}) 
n3.addEventListener('click', () => {
    display.innerHTML += 3;
    miniDisplay.innerHTML += 3;
}) 
n4.addEventListener('click', () => {
    display.innerHTML += 4;
    miniDisplay.innerHTML += 4;
})
n5.addEventListener('click', () => {
    display.innerHTML += 5;
    miniDisplay.innerHTML += 5;
}) 
n6.addEventListener('click', () => {
    display.innerHTML += 6;
    miniDisplay.innerHTML += 6;
})
n7.addEventListener('click', () => {
    display.innerHTML += 7;
    miniDisplay.innerHTML += 7;
}) 
n8.addEventListener('click', () => {
    display.innerHTML += 8;
    miniDisplay.innerHTML += 8;
})
n9.addEventListener('click', () => {
    display.innerHTML += 9;
    miniDisplay.innerHTML += 9;
}) 
n0.addEventListener('click', () => {
    display.innerHTML += 0;
    miniDisplay.innerHTML += 0;
})
nPonto.addEventListener('click', () => {
    display.innerHTML += '.';
    miniDisplay.innerHTML += ',';
})
//funcoes dos operadores
soma.addEventListener('click', function(){
    num1 = Number(display.innerHTML);
    display.innerHTML = '' 
    miniDisplay.innerHTML += ' + ';
    operador = 'soma' 
})
div.addEventListener('click', function(){
    num1 = Number(display.innerHTML);
    display.innerHTML = '' 
    miniDisplay.innerHTML += ' ÷ '
    operador = 'div' 
})
mult.addEventListener('click', function(){
    num1 = Number(display.innerHTML);
    display.innerHTML = '' 
    miniDisplay.innerHTML += ' x '
    operador = 'mult' 
})
sub.addEventListener('click', function(){
    num1 = Number(display.innerHTML);
    display.innerHTML = '';
    miniDisplay.innerHTML += ' - ';
    operador = 'sub';
})
percent.addEventListener('click', () => {
    num1 = Number(display.innerHTML);
    display.innerHTML = '';
    miniDisplay.innerHTML += ' % ';
    operador = 'percent';
})
pot.addEventListener('click', function(){
    num1 = Number(display.innerHTML);
    display.innerHTML = '';
    miniDisplay.innerHTML += ' ^ ';
    operador = 'pot';
})

//funcao de resultado, verificao qual foi operador selecionado 
result.addEventListener('click', () => {
    
    num2 = parseFloat(display.innerHTML);
    display.innerHTML = '';
    
    switch(operador){
        case 'soma':
            total = (num1+num2)
        break;
        case 'div':
            total = (num1/num2)
        break;
        case 'mult':
            total = num1*num2;
        break
        case 'sub':
            total = num1-num2;
        break;
        case 'percent':
            total = (num1 * num2) / 100;
        break;
        case 'pot':
            total = num1**num2;
        break;
    }
    //limita o numero maximo de 10 digitos no display
    display.innerHTML = String(total).substring(0, 10)
})
