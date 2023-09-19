const parImpar = (numero) => {
    if(numero<0){
        console.log(numero+" O valor é negativo")
    }
    else if(numero==0){
        console.log(numero+" o valor é neutro")
    }
    else if((numero%2)==0){
        console.log("O numero "+numero+ " é par");
    }
    else{
        console.log(numero+ "O numero é impar");
    }
}

parImpar(40);
parImpar(0);
parImpar(13);
parImpar(-1000)