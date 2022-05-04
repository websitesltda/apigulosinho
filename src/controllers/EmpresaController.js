const ModelEmpresas = require('../models/empresas');

module.exports =
{
    async List(req, res) {
        try {
            const cd_impresa = req.body.cd_impresa;
            const empresas = await ModelEmpresas.findAll(
                {
                    where: [{ cd_impresa: [cd_impresa] }]
                }
            );
            return res.json(empresas);

        } catch (erro) {
            return console.error("Erro na List : ", erro);
        }
    },

    async Create(req, res) {
        try {
            const empresas = await ModelEmpresas.create(
                {
                    id: req.body.id,
                    cd_impresa: req.body.cd_impresa,
                    codigo_impresa: req.body.codigo_impresa,
                    nome: req.body.nome,
                    cnpj: req.body.cnpj,
                    email: req.body.email,
                    telefone: req.body.telefone,
                    celular: req.body.celular,
                    estado: req.body.estado,
                    cidade: req.body.cidade,
                    data_registro: new Date()
                }
            );
            return res.json(empresas);

        } catch (erro) {
            return console.error("Erro ao criar nova categoria : ", erro);
        }
    },

    async Update(req, res) {
        try {

            const empresas = await ModelEmpresas.findByPk(req.body.id);
            if (empresas) {
                empresas.nome = req.body.nome;
                empresas.cnpj = req.body.cnpj;
                empresas.email = req.body.email;
                empresas.telefone = req.body.telefone;
                empresas.celular = req.body.celular;
                empresas.estado = req.body.estado;
                empresas.cidade = req.body.cidade;
                await empresas.save();
            }

            return res.json(empresas);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

    async GetOne(req, res) {
        try {

            const empresas = await ModelEmpresas.findByPk(req.body.id);

            return res.json(empresas);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

    async Delete(req, res) {
        try {

            const empresas = await ModelEmpresas.findByPk(req.body.id);
            await empresas.destroy();
            return res.json(empresas);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    }


}