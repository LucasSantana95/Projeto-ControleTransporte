const Alunos = require('../Models/Alunos');
const Mensalidades = require('../Models/Mensalidades');

module.exports = {
    get : (req,res) => {
        let Dados = [];
        Alunos.find().then((alunos)=>{
            Mensalidades.find().then((mensalidades)=> {
                for (const itemAlunos of alunos) {
                    let dado = {
                        id : itemAlunos._id,
                        nome : itemAlunos.nome,
                        escola : itemAlunos.escola,
                        turno : itemAlunos.turno,
                        valor : itemAlunos.valor,
                        pago : {class : "btnNaoPago", img : "x.jpg"},
                        data : 'Não Pago',
                        comentario : ''
                    }
                    for (const itemMensalidades of mensalidades) {
                        if(itemMensalidades.nome === itemAlunos.nome){
                            dado.pago.img = `certo.jpg`;
                            dado.pago.class = `btnPago`;
                            dado.data = `${itemMensalidades.dia}/${itemMensalidades.mes}`;
                            dado.comentario = itemMensalidades.comentario;
                        }
                    }
                    Dados.push(dado);
                }
                res.render('mensalidade.ejs',{Dados});
            })
        })
    },
    getModal : (req,res) => {
        Alunos.findById(req.params.id).then((aluno)=>{
            let dados = {
                nome : aluno.nome,
                valor : aluno.valor
            }
            res.render('modalMensalidade.ejs',{dados});
        })
    },
    postModal : (req,res) => {
        let mensalidadeAluno = new Mensalidades({
            nome : req.body.nome,
            mes : new Date( Date.now()).getMonth()+1,
            dia : new Date( Date.now()).getDate(),
            valor : req.body.valor,
            comentario : req.body.comentario
        })
        mensalidadeAluno.save();
        res.redirect('/mensalidade')
    }
}