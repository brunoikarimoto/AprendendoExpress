const mongoose = require("mongoose");

//conexao online
//const dbConfig = "mongodb+srv://brunoikarimoto:!@#$%¨*(@cluster0.qm9s0n0.mongodb.net/Anotacoes?retryWrites=true&w=majority";

//conexao local
const dbConfig = "mongodb://0.0.0.0:27017/anotacoes";

const conexao = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = conexao;