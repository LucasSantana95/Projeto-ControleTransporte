const mongoose = require('mongoose');
const responsavelSchema = new mongoose.Schema({
    nome : String,
    contato : String,
  });
  const Responsavel = mongoose.model('Responsavel', responsavelSchema,'responsaveis');

  module.exports = Responsavel;