let buttons = document.querySelectorAll('button');
let display = document.getElementById("display");
let a = 0;
let b = 0;
let operador = ' ';


for (let i = 0; i < buttons.length; i++) {
buttons[i].addEventListener('click', function() {botaoApertado(this)}, false);

}

function botaoApertado(button) {
console.log("Botão foi apertado");
if (button.classList.contains("numero")) {
    acrescentaDigito(button.innerText);
} else if (button.classList.contains("operador")) {
    defineOperador(button.innerText);
} else if (button.id == "igual"){
calcula();
}else{
    limpar();
}

}

function acrescentaDigito(digito) {
    digito = parseInt(digito);
    if(operador == '') {
    a = a * 10 + digito;
    escreveNoDisplay(digito);
    }else {
        b = b * 10 + digito;
        escreveNoDisplay(b);
    }
}

function escreveNoDisplay(valor){
    display.innerText = valor;

}

function defineOperador(op) {
operador = op;

}

function calcula() {
    if (operador == '+') {
        resultado = a + b;
        } else if (operador == '-') {
            resultado = a - b;
        } else if (operador == '*') {
            resultado = a * b;
        } else {
            resultado = a / b;
}
escreveNoDisplay(resultado);
}

function limpar() {
    a = 0;
    b = 0;
    operador = '';
    escreveNoDisplay(0);
}