
alert("Olá, mundo!");

/*break */

alert("A soma de dois números é:")
let firstNumber = prompt("Digite o primeiro número");
let secondNumber = prompt("Digite o segundo número")

alert(Number(firstNumber) + Number(secondNumber))/*

/*break*/



let checkNumber = prompt("Digite algo")
 
if(isNaN(checkNumber)) {
    alert("Não é um número")

}else {
    alert("É um número")
}

/*break*/

let checkString = prompt('Preencha algo')

if(isNaN(checkString)) {
    alert("É uma string")
}else {
    alert("Não é uma string")
}
 
/*break*/


alert("Declare duas variáveis e exiba o resultado de sua subtração")

let numberOne = prompt("Digite uma primeira variável");
let numberTwo = prompt("Digite a segunda varável")

alert(Number(numberOne) - Number(numberTwo))


alert("Exiba o resultado da multiplicação entre elas.")
 
alert(Number(numberOne) * Number(numberTwo))

alert("Exiba o resultado da divisão entre ela")

alert(Number(numberOne) / Number(numberTwo))

/*break*/

alert("Declare uma variável e verifique se o seu valor é um número par. ")

let checkPar = prompt("Digite algo")

if(checkPar % 2 == 0) {
  alert("É um número par")
}else{
  alert("Não é um número par")
}  

/*break*/

let checkImpar = prompt("Digite e verifique se o número é ímpar")

if(checkImpar % 2 != 0) {
  alert("É um número ímpar")
} else{
  alert("Não é um número ímpar")
}
