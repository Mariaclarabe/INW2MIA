//criação da função normal

function escrevendoNoConsole(){
    console.log("Primeiro exemplo - função normal")
}

//chama a função para executar 

escrevendoNoConsole();

//variação de função normal ou declarada

const escreveNoConsoleVariacao = function(){
    console.log("Segundo exemplo - variação do modo normal")
}

//chama a função para executar
escreveNoConsoleVariacao()

//arrow function função seta ou flecha
//toda arrow function usa os caracters = junto com > 

const escreveComArrow = ()=>{
    console.log('Terceira - Arrow function')   // o return é opcional
}

//chama a função para executar

escreveComArrow()

//arrow function => com parametro
const escreverComArrowParametro = (texto) => {
    console.log(texto);
} //se tiver apenas um parâmetro pode ser omitido as chaves {}

//chama a função para executar 
escreverComArrowParametro('Quarto exemplo, usando parametro')
escreveComArrow()
escreverComArrowParametro('outro texto')

//função arrow que somar dois valores
const somarDois = (numero1, numero2) =>{
    console.log('A soma é '+(numero1+numero2))
}

//executando
console.log('---------------------------------')
somarDois(10,10)

//variação arrow function sem parenteses e sem chave 
const varianteArrow = texto => console.log(texto)

