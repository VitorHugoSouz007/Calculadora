let numero = prompt("Digite um número para saber se é positivo ou negativo:")

/*if(numero >= 0) {
    alert(`O numero ${numero} é positivo`)
} else {
    alert(`O numero ${numero} é negativo`)
}
*/

alert(`O número ${numero} é ${ ((numero % 2) == 0) ? 'par' : 'impar'}`)
