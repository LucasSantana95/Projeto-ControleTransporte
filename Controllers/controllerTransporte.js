const Alunos = require('../Models/Alunos');
const Colegios = require('../Models/Colegios');

module.exports = {
    get: (req,res) => {
        res.render('inicioTransporte.ejs');
    },
    getManha: (req,res) => {
        Alunos.find({turno : 'Manhã'}).sort("escola").then((alunos) =>{
            res.render('manhaTransporte.ejs',{alunos});
        })
    },
    getTarde: (req,res) => {
        Alunos.find({turno : 'Tarde'}).sort("escola").then((alunos) =>{
            res.render('tardeTransporte.ejs',{alunos});
        })
    },
    postManha : (req,res) => {
        let alunosPresentes = [];
        let promise = new Promise( async (resolve, reject)=> {
            ordenarHorariosColegios();
            for (const i of req.body.presentes) {
                await Alunos.findById(i).then((item) =>{
                    let aluno = {
                        nome : item.nome,
                        escola : item.escola,
                        endereco : item.endereco
                    }
                    alunosPresentes.push(aluno);
                })   
            }
            if (alunosPresentes.length > 0) {
                resolve(alunosPresentes)
            } else {
                reject("erro");
            }
        })
        promise.then( async (alunosPresentes)=>{
            let alunosPresentesOrdenados = await definirOrdemAlunos(alunosPresentes);
            res.render('rotasManha.ejs',{alunosPresentesOrdenados});
        }).catch((erro) =>{ 
            console.log(erro)
        })
    },
    postTarde : (req,res) => {
        for (let i = 0; i < req.body.presentes.length; i++) {
            Alunos.findById(req.body.presentes[i]).then((aluno) =>{
                console.log(`Nome: ${aluno.nome} e Endereço: ${aluno.endereco}`);
            })       
        }
    }
}

function ordenarHorariosColegios(){
    Colegios.find().sort('manha').then((colegios)=>{
        let retornaColegiosManha = function (){
            let colegiosManha = [];
            for (const item of colegios) {
                if(item.manha != ''){
                    colegiosManha.push(item.nome);
                }
            }
            console.log(colegiosManha);
        }
        retornaColegiosManha();
    })
    Colegios.find().sort('tarde').then((colegios)=>{
        let retornaColegiosTarde = function (){
            let colegiosTarde = [];
            for (const item of colegios) {
                if(item.tarde != ''){
                    colegiosTarde.push(item.nome);
                }
            }
            console.log(colegiosTarde);
        }
        retornaColegiosTarde();
    })
}
function definirOrdemAlunos(alunos){
    let alunosOrdenados = [];
    let alunosCamargo = [];
    let alunosCeduc = [];
    let alunosPinheiros = [];

    for (const itemAluno of alunos) {
        if (itemAluno.escola == "Camargo") {
            alunosCamargo.push(itemAluno)
        } else if (itemAluno.escola == "CEDUC"){
            alunosCeduc.push(itemAluno)
        } else {
            alunosPinheiros.push(itemAluno)
        }
    }
    alunosOrdenados = alunosOrdenados.concat(alunosPinheiros,alunosCamargo,alunosCeduc);
    return alunosOrdenados;
}