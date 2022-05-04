const ModelFuncionarios = require('../models/funcionarios');

module.exports =
{
    async List(req, res) {
        try {
            const cd_impresa = req.body.cd_impresa;
            const funcionarios = await ModelFuncionarios.findAll(
                {
                    where: [{ cd_impresa: [cd_impresa] }]
                }
            );
            return res.json(funcionarios);

        } catch (erro) {
            return console.error("Erro na List : ", erro);
        }
    },

    async Create(req, res) {
        try {
            const funcionarios = await ModelFuncionarios.create(
                {
                    id: req.body.id,
                    codigoF:parseInt( Math.random() * (100000 - 1000) + 1000),
                    cd_impresa: req.body.cd_impresa,
                    nome: req.body.nome,
                    email: req.body.email,
                    telefone: req.body.telefone,
                    usuario: req.body.usuario,
                    senha: req.body.senha,
                    assinatura: req.body.assinatura,
                    data_registro: new Date()
                }
            );
            return res.json(funcionarios);

        } catch (erro) {
            return console.error("Erro ao criar nova categoria : ", erro);
        }
    },

    async Update(req, res) {
        try {

            const funcionarios = await ModelFuncionarios.findByPk(req.body.id);
            if (funcionarios) {
                funcionarios.nome = req.body.nome;
                funcionarios.email = req.body.email;
                funcionarios.telefone = req.body.telefone;
                funcionarios.usuario = req.body.usuario;
                funcionarios.senha = req.body.senha;
                funcionarios.assinatura = req.body.assinatura;
                await funcionarios.save();
            }

            return res.json(funcionarios);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

    async GetOne(req, res) {
        try {

            const funcionarios = await ModelFuncionarios.findByPk(req.body.id);

            return res.json(funcionarios);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

    async Delete(req, res) {
        try {

            const funcionarios = await ModelFuncionarios.findByPk(req.body.id);
            await funcionarios.destroy();
            return res.json(funcionarios);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    }


}