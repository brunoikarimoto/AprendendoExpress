const mongoose = require("mongoose");

const dbConfig = "mongodb+srv://brunoikarimoto:!@#$%¨*(@cluster0.qm9s0n0.mongodb.net/Anotacoes?retryWrites=true&w=majority";
const conexao = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = conexao;