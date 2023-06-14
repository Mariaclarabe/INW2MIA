//fazer um programa que receba a digitação de números do usuário
//até que o usuário digite um número negativo
//ao final mostra 
//a soma dos números
//a quantidade de números lidos 
//o maior número digitado

const leia = require("prompt-sync")()
let numero = 0
let total = 0
let maior = 0 


while (numero>= 0){
    total += numero
    if(numero>maior){
       maior = numero
    }
    contador++
    numero = parseInt(leia("Digite um numero : "))
    
}
console.log("O total é "+total)
console.log("Maior número :"+maior)
console.log("Quantidade :"+contador)
console.log("Fim de prgrama!!!")