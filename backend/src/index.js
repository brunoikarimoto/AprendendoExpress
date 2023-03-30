require("./config/dbConfig");
const express = require("express");
const app = express();
app.use(express.json());

//(req, res) => é a mesma coisa que function(req, res)
app.get("/", (req, res) =>{
    return res.json({
        nome: "Bruno",
        idade: 19,
        sexo: "Masculino"
    });
});

app.listen(8081, function(){
    console.log("Servidor rodando.");
});

