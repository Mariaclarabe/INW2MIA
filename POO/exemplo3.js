class Pessoa {
    constructor(cpf,Nome,anoNasciento){
        this.cpf = cpf;
        this.nome = nome;
        this.anoNascimento = anoNascimento
    }

    mostrarIdade(){
        console.log(2023-this.anoNascimento)
    }
}

//programa principal
 
let cliente1 = new Pessoa("111.222.33-44","Paulo", 2000)
let cliente2 = new Pessoa("222.444.555-33","Maria",2003)

console.log(cliente1.nome)
cliente1.mostrarIdade()
