const leia = require("prompt-sync")()

let aluno = leia("Digite o nome do aluno : ")
let nota = parseInt(leia("Digite a nota do aluno [1-10] : "))
let tipo = leia("Digite o aluno, a aluna ou e alune : ")

if(tipo == "o"){
if(nota<= 5){
    console.log("Olá aluno "+aluno+" você foi reprovado")
}
else{
    console.log("Olá aluno "+aluno+" parabens, você foi aprovado")
}
}

if(tipo == "a"){
    if(nota<= 5){
        console.log("Olá aluna "+aluno+" você foi reprovada")
    }
    else{
        console.log("Olá aluna "+aluno+" parabens, você foi aprovada")
    }
    }

    if(tipo == "e"){
        if(nota<= 5){
            console.log("Olá alune "+aluno+" você foi reprovade")
        }
        else{
            console.log("Olá alune "+aluno+" parabens, você foi aprovade")
        }
        }