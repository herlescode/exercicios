
//Captura o evento submite do resultado
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
e.preventDefault(); //não deixou o submit ser enviando ele precisa aguardar
  
//está pegando o input inteiro
const inputPeso = e.target.querySelector('.peso');//qual o elemento foi clicado na pagina.
const inputAltura = e.target.querySelector('.altura');

// transformaar meu valor recebido em um número 
const peso = Number(inputPeso.value);
const altura = Number(inputAltura.value);

if (!peso) {
    setResultado ('Peso invalido!', false);
    return;
}
if(!altura) {
    setResultado('Altura invalida', false);
    return;
}
const imc = getImc(peso, altura);
const nivelImc = getNivelImc(imc);
const msg = `Seu IMC é ${imc} e seu nível de gordura no corpo é ${nivelImc}`

setResultado(msg, true);

//console.log(imc, nivelImc, msg);

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobre peso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) {
        return nivel [5];
    }else if (imc >= 34.9){
        return nivel [4];
    }else if (imc >= 29.9){
        return nivel [3];
    }else if (imc >= 24.9){
        return nivel [2];
    }else if (imc >= 18.5){
        return nivel [1];
    } else if (imc < 18.5){
        return [0]; 
    }
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}
//console.log(peso, altura);
//agora será capturado o valor

//console.log(inputPeso, inputAltura)
//console.log('evento');
//setResultado('Ola Mundo');
});

//função que só cria um paragrafo
function criaP() {
    const p = document.createElement('p'); 
    return p;
}

// Exibir o resultado dentro da div

function setResultado(msg, isValid){
    const result = document.querySelector('#resultado');
    result.innerHTML = '';
    const p = criaP();

    if(isValid) {
        p.classList.add('parafrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    result.appendChild(p);



    //criando um elento 'P' com js
    
   //const p = document.createElement('p');
    //p.classList.add('parafrafo-resultado');//com essa classe eu posso inserir um css com uma cor para destacar
    //p.innerHTML = 'Qualquer coisa';
   //result.appendChild(p);
}