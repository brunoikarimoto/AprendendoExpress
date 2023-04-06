require("./config/dbConfig");
const express = require("express");
const app = express();
const rotas = require("./rotas");

app.use(express.json());
app.use(rotas);
//(req, res) => é a mesma coisa que function(req, res)


app.listen(8081, function(){
    console.log("Servidor rodando.");
});

