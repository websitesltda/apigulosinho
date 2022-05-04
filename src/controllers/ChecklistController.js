const ModelChecklist = require('../models/checklist');

module.exports =
{
    async List(req, res) {
        try {
            const cd_impresa = req.body.cd_impresa;
            const checklist = await ModelChecklist.findAll({
                where: [{ cd_impresa: [cd_impresa] }]
            });
            return res.json(checklist);

        } catch (erro) {
            return console.error("Erro na List : ", erro);
        }
    },

    async Create(req, res) {
        try {
            const checklist = await ModelChecklist.create(
                {
                    id: req.body.id,
                    cd_impresa: req.body.cd_impresa,
                    cod_checklist: req.body.cod_checklist,
                    num_contrato: req.body.num_contrato,
                    empresa_origem: req.body.empresa_origem,
                    empresa_destino: req.body.empresa_destino,
                    numero_container: req.body.numero_container,
                    numero_oic: req.body.numero_oic,
                    quantidade: req.body.quantidade,
                    status: req.body.status,
                    data: req.body.data,
                    data_registro: new Date()
                }
            );
            return res.json(checklist);

        } catch (erro) {
            return console.error("Erro ao criar nova categoria : ", erro);
        }
    },

    async Update(req, res) {
        try {

            const checklist = await ModelChecklist.findByPk(req.body.id);
            if (checklist) {
                checklist.cod_checklist = req.body.cod_checklist;
                checklist.num_contrato = req.body.num_contrato;
                checklist.empresa_origem = req.body.empresa_origem;
                checklist.empresa_destino = req.body.empresa_destino;
                checklist.numero_container = req.body.numero_container;
                checklist.numero_oic = req.body.numero_oic;
                checklist.quantidade = req.body.quantidade;
                checklist.data = req.body.data;
                await checklist.save();
            }

            return res.json(checklist);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

    async UpdateStatus(req, res) {
        try {

            const checklist = await ModelChecklist.findByPk(req.body.id);
            if (checklist) {
                checklist.status = req.body.status;
                await checklist.save();
            }
            return res.json(checklist);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

    async GetOne(req, res) {
        try {

            const checklist = await ModelChecklist.findByPk(req.body.id);

            return res.json(checklist);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

    async Delete(req, res) {
        try {

            const checklist = await ModelChecklist.findByPk(req.body.id);
            await checklist.destroy();
            return res.json(checklist);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    }


}