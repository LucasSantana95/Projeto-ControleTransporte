const mongoose = require('mongoose');
const mensalidadeSchema = new mongoose.Schema({
    nome : String,
    mes : String,
    dia : String,
    valor : String,
    comentario : String,
  });
  const Mensalidade = mongoose.model('Mensalidade', mensalidadeSchema,"mensalidades");

  module.exports = Mensalidade;

