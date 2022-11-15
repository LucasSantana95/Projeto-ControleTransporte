const Alunos = require('../Models/Alunos');
const Colegios = require('../Models/Colegios');

module.exports = {
    get: (req,res) => {
        Alunos.find().then((alunos)=>{
            res.render('../Views/aluno.ejs',{alunos});
        })
        
    },
    addAluno: (req,res) => {
        Colegios.find().then((colegios)=>{
            res.render('addaluno.ejs',{colegios});
        }) 
    },
    addAlunopost: (req,res) => {
        if( req.body.nome != "" || req.body.nome != undefined || 
            req.body.escola != "" || req.body.escola != undefined ||
            req.body.turno != "" || req.body.turno != undefined ||
            req.body.valor != "" || req.body.valor != undefined){
            let aluno = new Alunos({
                nome: req.body.nome,
                endereco : req.body.endereco,
                escola: req.body.escola,
                turno: req.body.turno,
                valor: req.body.valor
            } );
            aluno.save();
            console.log("Aluno inserido com sucesso!");
            res.redirect('/aluno');
        }
    },
    alterar: (req,res) => {
        Alunos.findById(req.params.id, (err,docs) => {
            if(err){
                console.log(err);
            }
            else{
                res.render('alterarAluno.ejs',{Aluno : docs});
            }
        })
    },
    alterarpost: (req,res) => {
        Alunos.findByIdAndUpdate({ _id: req.params.id }, 
            {   
                nome: req.body.nome,
                endereco: req.body.endereco,
                escola: req.body.escola,
                turno: req.body.turno,
                valor: req.body.valor
            },
            (err) =>{
                if(err){
                    console.log(err);
                }
                else{
                    res.redirect('/aluno');
                }
            });
    },
    deletar: (req,res) => {
        Alunos.findByIdAndDelete(req.params.id, (err) => {
            if(err){
                console.log(err);
            }
            else{
                res.redirect('/aluno');
            }
        })
    }
}