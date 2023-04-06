const mongoose = require("mongoose");

const AnotacaoModelSchema = new mongoose.Schema({
    titulo: String,
    notas: String,
    prioridade: Boolean,
});

//                        nome do db(mas maiusculo aqui funcionou)
module.exports = mongoose.model("Anotacoes", AnotacaoModelSchema);