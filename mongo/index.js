//mongodb://localhost:27017

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/exemplo',
{useNewUrlParser : true, 
useUnifiedTopology:true,
serverSelectionTimeoutMS : 20000});

const db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error : '));

db.once('open', function(){
    console.log("Estamos conectados ao banco")
})

const pessoaSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    profissão: String
});

const pessoa = mongoose.model('pessoa',pessoaSchema);

const maria = new pessoa ({
    nome : 'Maria',
    idade : 17,
    profissao : 'Estudante'
});

console.log (maria.nome);
console.log (maria.idade);
console.log (maria.profissao);

maria.save();


