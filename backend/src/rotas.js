const express = require("express");
const rotas = express.Router();
const AnotacaoController = require("./controllers/AnotacaoController");

rotas.get('/anotacoes', AnotacaoController.read);
rotas.post('/anotacoes', AnotacaoController.create);

module.exports = rotas;