const { json } = require("express");
const Anotacoes = require("../models/AnotacaoModel");

module.exports = {
    async read(req, res){
        const anotacoesList = await Anotacoes.find();
        return res.json(anotacoesList);
    },

    async create(req, res){
        const {titulo, notas, prioridade} = req.body;

        if(!titulo || !notas){
            return res.status(400).json({error: "É necessário preencher o título e sua nota."});
        }

        const anotacaoCriada = await Anotacoes.create({
            titulo,
            notas,
            prioridade
        });
        return res.json(anotacaoCriada);
    },

    async delete(req, res){
        const {id} = req.params;
        const anotacaoDeletada = await Anotacoes.findOneAndDelete({_id:id});
        if(anotacaoDeletada){
            return res.json(anotacaoDeletada);
        }
        return res.status(401).json({error: "Registro não encontrado."});
    },

    async update(req, res){
        const {id} = req.params;
        const {titulo, notas, prioridade} = req.body;

        console.log(req.body);

       const anotacao = await Anotacoes.findOne({ _id: id });

       console.log(anotacao);

        anotacao.titulo = titulo;
        anotacao.notas = notas;
        anotacao.prioridade = prioridade;

        console.log(anotacao);

        await anotacao.save();

        return res.json(anotacao);
    },
};