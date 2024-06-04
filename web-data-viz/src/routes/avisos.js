var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

router.get("/listar/:idPost", function (req, res) {
    avisoController.listarPorPost(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

router.put("/editar/:idPost", function (req, res) {
    avisoController.editar(req, res);
});

router.delete("/deletar/:idPost", function (req, res) {
    avisoController.deletar(req, res);
});

router.post("/curtir/:idPost/:idUsuario", function (req, res) {
    avisoController.like(req, res);
});

module.exports = router;