let operacao = prompt("Digite uma operação, 1-soma, 2-subtração, 3-multiplicação, 4-divisão")

if((operacao >= 1) && (operacao <= 4)) {

let num1 = Number(prompt("Digite o primeiro valor da operação:"))
    let num2 = Number(prompt("Digite o segundo valor da operaçao:"))

let soma = (v1,v2) => v1 + v2
let subtração = (v1,v2) => v1 - v2
let multiplicacao = (v1,v2) => v1 * v2
let divisao = (v1,v2) => v1 / v2

switch (operacacao) {
    case '1' :
        alert (`O total é: ${num1 + num1}`)
        break;
    case '2' :
        alert (`O total é: ${num1 - num1}`)
        break;
    case '3' : 
        alert (`O total é: ${num1 * num1}`)
        break;
    case '4' :
        alert (`O total é: ${num1 / num1}`)
        break;
}

}