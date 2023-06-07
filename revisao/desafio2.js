//calcule a raiz quadrada de um número

const leia = require("prompt-sync")()

let numero
numero = parseInt(leia("Digite o numero : "))

console.log("Raiz quadrada : "+(Math.sqrt(numero)))
console.log("Numero ao cubo : "+(Math.pow(numero,3)))