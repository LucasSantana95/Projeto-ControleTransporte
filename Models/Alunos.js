const mongoose = require('mongoose');
const alunoSchema = new mongoose.Schema({
    nome : String,
    endereco : String,
    escola : String,
    turno : String,
    responsavel : Object,
    valor : Number
  });
  const Aluno = mongoose.model('Aluno', alunoSchema);

  module.exports = Aluno;

/*   const alunosPresentesSchema = new mongoose.Schema({
    data : Date,
    alunos : Object,
  });
  const AlunosPresentes = mongoose.model('AlunosPresentes', alunosPresentesSchema);
  
  module.exports = AlunosPresentes;

  module.exports = function inserirPresença(id){
    presenca.push(id);
    console.log(presenca);
  } */


