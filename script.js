

function minhaDupla(eu , colega){
    console.log(colega)
    alert("minha dula é: " + eu +" e "+ colega)

}



function meusTestes(){
    console.log("aqui 1")
    // document.querySelector("#div3").innerHTML = '<a href=www.castgroup.com.br >cast mil grau</a>';
    window.alert("alerta curso acabado")


    console.log("aqui function")
}

function TestaCPF(strCPF) {
  console.log(strCPF)
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) 
  Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    console.log("cpf é valido")
    return true;
}



var gaveta1 = "6"
var gavetasgrande = ["varinha harry","varinha larissa","varinha hermione"]

// var variaveis globais
// let locais 
// const constante


// How to create variables:
var joaninha;
let luluzinha;

// How to use variables:


joaninha = 5;
luluzinha = 6;

let soma = joaninha + luluzinha;

//-------------


var larissa = 10

larissa = 8 

console.log(larissa)

// ------- decremento

let x = 10;
let y = x - 5;

document.write(y);

// role mais simples


let r = 10;
r -= 5;
document.write(r);






