const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const rotaAluno = require('./Routes/rotasAlunos');
const rotaResponsavel = require('./Routes/rotasResponsaveis');
const rotasTransporte = require('./Routes/rotasTransporte');
const rotaMensalidade = require('./Routes/rotasMensalidades');

mongoose.connect('mongodb://127.0.0.1:27017/transporte').then(()=>{
    console.log('Conectado com sucesso!');
}).catch((err)=>{
    console.log('erro: ' + err)
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');
app.engine('ejs', require('ejs').__express);
app.use(express.static(path.join(__dirname,'/public')));

app.use(rotaAluno);
app.use(rotaResponsavel);
app.use(rotasTransporte);
app.use(rotaMensalidade);

app.listen(3000);
console.log('Servidor rodando em http://127.0.0.1:3000/')