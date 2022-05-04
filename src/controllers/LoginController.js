const ModelUsuarios = require('../models/usuarios');
const ModelFuncionarios = require('../models/funcionarios');

const { Op } = require("sequelize");

module.exports =
{

    async Login(req, res) {
        try {

            const usuario = req.body.usuario;
            const senha = req.body.senha;

            const usuarios = await ModelUsuarios.findAll({
                where: [{ usuario: [usuario] }, { senha: [senha] }]
            });

            const funcionarios = await ModelFuncionarios.findAll({
                where: [{ usuario: [usuario] }, { senha: [senha] }]
            });

            const response = res.json(usuarios.length > 0 ? usuarios : funcionarios.length > 0 ? funcionarios: [{mensagem:'Usuario não cadastrado'}]);
        

            return response;

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

}