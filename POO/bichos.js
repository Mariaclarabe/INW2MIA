class Animal{
    constructor(tipo, porte, femea, nascimento){
        this.tipo = tipo;
        this.porte = porte;
        this.femea = femea;
        this.nascimento = nascimento;
      }

      fazerBarulho(){
          console.log("fazendo barulho...")
      }

      retornarIdade(anoAtual){
        return anoAtual - this.nascimento
      }

}

class Gato extends Animal {
      constructor(tipo, raca, cor){
      super(tipo);  
      this.raca = raca;
      this.cor = cor;
    }

    miar(){
        console.log("miauuuu....")
    }

}

class Cachorro extends Animal{
    constructor(tipo,raca,cor){
        super(tipo);
        this.raca = raca;
        this.core = cor;
    }
    latir(){
        console.log("auau....")
    }

}

//PROGRAMA PRINCIPAL
let bicho1 = new Animal("mamifero","medio",false,2020)
let frajola = new Gato("felino","sphynx","preto")
let nina = new Cachorro("canino","yorkshire","marrom")

//console.log(bicho1)
console.log(bicho1.porte)
bicho1.fazerBarulho()
frajola.fazerBarulho()
frajola.miar()
nina.fazerBarulho()
nina.latir()
nina.nascimento = 2021
console.log("A idade é "+nina.retornarIdade(2023))
frajola.nascimento = 2020
console.log("A idade é "+frajola.retornarIdade(2023))



