var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {
    var {fkUsuario} = req.params

    medidaModel.buscarUltimasMedidas(fkUsuario)
        .then(result => res.status(200).json(result))
        .catch(erro => {
            console.error('Erro', erro.sqlMessage)
            res.status(500).json(erro.sqlMessage)
        })
}


function buscarMedidasEmTempoReal(req, res) {

    var idAquario = req.params.idAquario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function ultimaRodada (req,res){
    var {fkUsuario} = req.params

    medidaModel.ultimaRodada(fkUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a ultima data.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function ultimaPontuacao(req,res){
    var {fkUsuario} = req.params

    medidaModel.ultimaPontuacao(fkUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a ultima Pontuação.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function medianota(req,res){
    var {fkUsuario} = req.params

    medidaModel.medianota(fkUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as medias.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function mediageral(req, res) {
    var {fkUsuario} = req.params

    medidaModel.mediageral(fkUsuario)
        .then(result => res.status(200).json(result))
        .catch(erro => {
            console.error('Erro', erro.sqlMessage)
            res.status(500).json(erro.sqlMessage)
        })
}

function mediageralGraph(req, res) {
    medidaModel.mediageralGraph()
        .then(result => res.status(200).json(result))
        .catch(erro => {
            console.error('Erro', erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarPersonagem(req, res) {

    medidaModel.buscarPersonagem()
        .then(result => res.status(200).json(result))
        .catch(erro => {
            console.error('Erro', erro.sqlMessage)
            res.status(500).json(erro.sqlMessage)
        })
}

function buscarFoto(req, res) {
    var fkUsuario = req.params.fkUsuario;

    medidaModel.buscarFoto(fkUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a imagem do personagem.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    ultimaRodada,
    ultimaPontuacao,
    medianota,
    mediageral,
    buscarPersonagem,
    mediageralGraph,
    buscarFoto
}