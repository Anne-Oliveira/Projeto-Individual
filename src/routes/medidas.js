var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:fkUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:id", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/ultimaRodada/:fkUsuario", function (req, res) {
    medidaController.ultimaRodada(req, res);
})

router.get("/ultimaPontuacao/:fkUsuario", function (req, res) {
    medidaController.ultimaPontuacao(req, res);
})

router.get("/medianota/:fkUsuario", function (req, res) {
    medidaController.medianota(req, res);
})

router.get("/mediageral", function (req, res) {
    medidaController.mediageral(req, res);
});

router.get("/mediageralGraph", function (req, res) {
    medidaController.mediageralGraph(req, res);
});

router.get("/buscarPersonagem", function (req, res) {
    medidaController.buscarPersonagem(req, res);
});



module.exports = router;