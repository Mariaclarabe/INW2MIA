//mongodb://localhost:27017

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/teste',
{useNewUrlParser : true, useUnifidTopology:true});

const db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error : '))

db.once('open', fuction(){
    console.log("Estamos conectados ao banco")
})

