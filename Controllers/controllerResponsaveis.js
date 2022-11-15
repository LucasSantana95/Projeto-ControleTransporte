const Responsaveis = require('../Models/Responsaveis');

module.exports = {
    get: (req,res) => {
        Responsaveis.find().then((responsaveis)=>{
            res.render('../Views/responsavel.ejs',{responsaveis});
        })
    },
    addResponsavel: (req,res) => {
        res.render('addresponsavel.ejs');
        
    },
    addResponsavelpost: (req,res) => {
        if( req.body.nome != "" || req.body.nome != undefined || 
            req.body.contato != "" || req.body.contato != undefined){
            let responsavel = new Responsaveis({
                nome: req.body.nome,
                contato : req.body.contato,
            } );
            responsavel.save();
            console.log("Responsavel inserido com sucesso!");
            res.redirect('/responsavel');
        }
    },
    alterar: (req,res) => {
        Responsaveis.findById(req.params.id, (err,docs) => {
            if(err){
                console.log(err);
            }
            else{
                res.render('alterarResponsavel.ejs',{Responsavel : docs});
            }
        })
    },
    alterarpost: (req,res) => {
        Responsaveis.findByIdAndUpdate({ _id: req.params.id }, 
            {   
                nome: req.body.nome,
                contato: req.body.contato,
            },
            (err) =>{
                if(err){
                    console.log(err);
                }
                else{
                    res.redirect('/responsavel');
                }
            });
    },
    deletar: (req,res) => {
        Responsaveis.findByIdAndDelete(req.params.id, (err) => {
            if(err){
                console.log(err);
            }
            else{
                res.redirect('/responsavel');
            }
        })
    }
}