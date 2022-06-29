let operacao = prompt("Digite uma operação, 1-soma, 2-subtração, 3-multiplicação, 4-divisão")

// operacao está entre 1,2, 3 e 4
// operacao = 2

// == igualdade 
// && E
// || ou


// > Maior 
// < Menor 
// >= Maior e Igual
// <= Menor e Igual



// (operacao > 1) && (operacao < 4)
//      VERDADE      &&      VERDADE
//               VERDADE

// + Soma 
// - Subtração
// / Divisão
// % módulo (O resto da divisão)

if((operacao >= 1) && (operacao <= 4)){
// o que tiver dentro

let num1 = Number(prompt("Digite o primeiro valor da operação: "))
let num2 = Number(prompt("Digite o segundo valor da operaçao: "))

// Operação Soma 
if(operacao == 1){
    alert(`O total é: ${num1 + num2}`)
} else {

// Operação Subtração
if(operacao == 2){
    alert(`O total é: ${num1 - num2}`)
} else {

// Operação Multiplicação
if(operacao == 3){
    alert(`O total é: ${num1 * num2}`)
} else {

// Operação Divisão
if(operacao == 4){
    alert(`O total é: ${num1 / num2}`)
}

}

}

}

} 

/*
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
    default:
        alert(`Digite o valor entre 1 a 4!`)
}
*/

/*} else {
    alert(`Digite um valor entre 1 a 4!`)
}*/

 