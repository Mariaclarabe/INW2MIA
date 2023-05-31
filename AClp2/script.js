class AutoPeças{
    constructor(id, descricao, ativo, estoque, preco, cor, marca){
        this.id = id,
        this.descricao = descricao,
        this.ativo = ativo;
        this.estoque = estoque,
        this.preco = preco,
        this.cor = cor,
        this.marca = marca
    }

    ativar(){
        if(this.ativo == false){
            this.ativo = true;
            console.log("Produto ativado!")
        } 
        else {
            console.log("O produto está ativado")
        }
    }

    retirarEstoque(quantidade){
        if(this.ativo == true){
            if((this.estoque - quantidade)>=0){
                this.estoque -= quantidade;
                console.log("Compra realizada, valor a ser pago: R${(this.preco * quantidade)} Temos ${this.estoque} produtos no estoque");
            } 
            else {
                console.log("Não é possível comprar mais produtos");
            }
        } 
        else {
            console.log("Produto está inativo");
        }
    }

    incluirEstoque(quantidade){
        if(this.ativo == true){
            if(quantidade > 10){
                console.log("Não é possível adicionar mais 10 itens")
            } else {
                this.estoque += quantidade;
            console.log("Produtos adicionados! Tem ${this.estoque} produtos no estoque");
            }
        } 
        else {
            console.log("Produto está inativo")
        }
    }
}

function realizarCompras(){
    console.log("Cadastro inicial do produto")
    let id = parseInt(leia("Digite o id do produto: "));
    let descricao = leia("Digite a descrição do produto: ");
    let preco = parseFloat(leia("Digite o preço unitário do produto: "));
    let cor = leia("Digite a cor do produto: ");
    let marca = leia("Digite a marca do produto: ");

    const p1 = new AutoPeças(id, descricao, false, 10, preco, cor, marca);
    p1.ativar();

    for(i = 1; i <= 5; i++){
        console.log("Venda ${i}");
        console.log(p1);
        let quantidade = parseInt(leia("Quantos produtos deseja comprar?"));
        p1.retirarEstoque(quantidade);
    }
   
    let quantidade = parseInt(leia("Quantos produtos deseja adicionar ao estoque? "));
    p1.incluirEstoque(quantidade);

    let quer = leia("Gostaria de continuar a compra?(Sim ou Não) ");
    if(quer == "S"){
        realizarCompras();
    } 
    else {
        console.log("Fim do programa...até breve!")
    }
}

const leia = require("prompt-sync")();

let quer = leia("Gostaria de realizar uma compra?(Sim ou Não) ");
if(quer == "S"){
    realizarCompras();
} 
else {
    console.log("Fim do programa...até breve!")
}