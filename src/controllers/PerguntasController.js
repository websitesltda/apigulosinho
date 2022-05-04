const ModelPerguntas = require('../models/perguntas');

module.exports =
{
    async List(req, res) {
        try {
            const cd_impresa = req.body.cd_impresa;
            const perguntas = await ModelPerguntas.findAll(
                {
                    where: [{ cd_impresa: [cd_impresa] }]
                    ,
                    order: [  ['ordem', 'ASC']]
                }
            );
            return res.json(perguntas);

        } catch (erro) {
            return console.error("Erro na List : ", erro);
        }
    },

    async Create(req, res) {
        try {
            const perguntas = await ModelPerguntas.create(
                {
                    id: req.body.id,
                    id_categoria: req.body.id_categoria,
                    cd_impresa: req.body.cd_impresa,
                    perguntaPT: req.body.perguntaPT,
                    perguntaEN: req.body.perguntaEN,
                    assinalar: req.body.assinalar,
                    assinatura: req.body.assinatura,
                    escrever: req.body.escrever,
                    tituloPT: req.body.tituloPT,
                    tituloEN: req.body.tituloEN,
                    ordem: req.body.ordem,
                    data_registro: new Date()
                }
            );
            return res.json(perguntas);

        } catch (erro) {
            return console.error("Erro ao criar nova categoria : ", erro);
        }
    },

    async Update(req, res) {
        try {

            const perguntas = await ModelPerguntas.findByPk(req.body.id);
            if (perguntas) {
                perguntas.id_categoria = req.body.id_categoria;
                perguntas.perguntaPT = req.body.perguntaPT;
                perguntas.perguntaEN = req.body.perguntaEN;
                perguntas.assinalar = req.body.assinalar;
                perguntas.assinatura = req.body.assinatura;
                perguntas.escrever = req.body.escrever;
                perguntas.tituloPT = req.body.tituloPT;
                perguntas.tituloEN = req.body.tituloEN;
                perguntas.ordem = req.body.ordem;
                await perguntas.save();
            }

            return res.json(perguntas);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

    async GetOne(req, res) {
        try {

            const perguntas = await ModelPerguntas.findByPk(req.body.id);

            return res.json(perguntas);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

    async Delete(req, res) {
        try {

            const perguntas = await ModelPerguntas.findByPk(req.body.id);
            await perguntas.destroy();
            return res.json(perguntas);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    }


}