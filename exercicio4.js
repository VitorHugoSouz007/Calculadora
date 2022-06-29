let numero = prompt("Digite um número para saber se é par ou impar:")

// numero % 2 = 0 É Par (== 00)
// numero % 2 > 0 É Impar ( > 0)

// let resultado = numero % 2 

/* 
if ((numero % 2) == numero 0 {
    alert (`O número ${nuemro} é par`)
} else {
    alert(`O número ${numero} é impar`)
}
*/


//IF TERNÁRIO
//                           |condição  | ? ação true : ação false 
alert(`O número ${numero} é ${ ((numero % 2) == 0) ? 'par' : 'impar'}`)