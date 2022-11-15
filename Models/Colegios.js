const mongoose = require('mongoose');
const colegioSchema = new mongoose.Schema({
    nome : String,
    manha : String,
    entregaManha : String,
    tarde : String,
    entregaTarde : String,
  });
  const Colegio = mongoose.model('Colegio', colegioSchema,"colegios");

  module.exports = Colegio;

