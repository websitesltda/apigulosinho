const ModelResultados = require('../models/resultados');

module.exports =
{
    async List(req, res) {
        try {
            const resultados = await ModelResultados.findAll();
            return res.json(resultados);

        } catch (erro) {
            return console.error("Erro na List : ", erro);
        }
    },

    async Create(req, res) {
        try {
            const resultados = await ModelResultados.create(
                {
                    id: req.body.id,
                    checklist: req.body.checklist,
                    id_funcionario: req.body.id_funcionario,
                    cvi: req.body.cvi,
                    pdf: req.body.pdf,
                    perguntas: req.body.perguntas,
                    respostas: req.body.respostas,
                    data_registro: new Date()
                }
            );
            return res.json(resultados);

        } catch (erro) {
            return console.error("Erro ao criar nova categoria : ", erro);
        }
    },

    async Update(req, res) {
        try {

            const resultados = await ModelResultados.findByPk(req.body.id);
            if (resultados) {
                resultados.perguntas = req.body.perguntas;
                resultados.respostas = req.body.respostas;
                resultados.pdf = req.body.pdf;
                await resultados.save();
            }

            return res.json(resultados);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

    async GetOne(req, res) {
        try {
            const id = req.body.id;
            const resultados = await ModelResultados.findAll({
                where: [{ checklist: [id] }]
            });

            return res.json(resultados);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

    async Delete(req, res) {
        try {

            const resultados = await ModelResultados.findByPk(req.body.id);
            await resultados.destroy();
            return res.json(resultados);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    }


}