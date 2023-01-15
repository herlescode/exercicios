// function interruptorLigado(desligado){
//     return desligado;
// }
// console.log(interruptorLigado('30m'));

// function minerando(){
//     console.log ('a todo vapor');
// }
// minerando();

// function calculaImc(peso, altura){
//     const calcula = peso / (altura **2);
//     return calcula;
// }
// console.log(calculaImc(1.8, 94));

// function corFavorita (cor){
//     if(cor == 'verde'){
//         return'eu gosto de mato';
//     } else if (cor == 'preto'){
//         return'eu gosto de rock';
//     } else {
//         console.log('eu não gosto de nada');
//     }
// }
// console.log(corFavorita('verde'));

// function eventoClick(){
//     console.log('oi');
// }
// addEventListener('click', eventoClick);

// function calculaImc(peso, altura) {
//     const imc = peso / (altura ** 2);
//     console.log(imc);
// }
// calculaImc(93, 1.8);

// function terceiraIdade(idade) {
//     if (typeof idade !== 'number'){
//         return 'digite novamente sua idade';
//     } else if (idade >= 40) {
//         return true;
//     } else {
//         return false;
//     } 
// }
// console.log (terceiraIdade(21))

// function paisesNaoVisitado(aVisitar) {
//     var qntPaises = 190;
//     return `falta visitar ${qntPaises -  aVisitar } paises`;
// }
// console.log(paisesNaoVisitado(10))

// function isTruthy(dados1){
//     return !!dados1;
// }

// function valorVerdadeiro(valor) {
//     let dado = 5;
//     if(valor >= dado){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(valorVerdadeiro(4));

// function perimetroQuadrado(valorPerimetro){
//     return `o perimetro de um quadrado é ${valorPerimetro *4}`
// }
// console.log(perimetroQuadrado(4))

// function nomeCompleto(nome, sobrenome){
//     return `por favor qual o seu nome completo é ${ nome +  sobrenome}`
// }
// console.log(nomeCompleto('Herles', 'Pontual'));

// function numPar(numero){
//     var par = numero / 2;
//     if (par % 2 == 0){
//         return ` ${numero} é par`;
//     } else {
//         return `${numero} é impar`;
//     }
// }
// console.log (numPar(7))

// function tipoDado(dado){
//     return `${typeof dado} `
// }
// console.log(tipoDado(true));

const elemento = document.querySelector('.btn')
elemento.addEventListener('click', function(){
    alert('obrigado');
})

