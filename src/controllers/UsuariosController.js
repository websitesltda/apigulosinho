const ModelUsuarios = require('../models/usuarios');

module.exports =
{
    async List(req, res) {
        try {
            const usuarios = await ModelUsuarios.findAll();
            return res.json(usuarios);

        } catch (erro) {
            return console.error("Erro na List : ", erro);
        }
    },

    async Create(req, res) {
        try {
            const email = req.body.email;
            const [tech] = await ModelUsuarios.findCreateFind({
                where: { email }
            })
            return res.json("Email ja Cadastrado");
        } catch (erro) {
            try {

                const usuario = req.body.usuario;
                const [user] = await ModelUsuarios.findCreateFind({
                    where: { usuario }
                })
                return res.json("Usuario ja Cadastrado");

            } catch (error) {

                try {
                    const cnpj = req.body.cnpj;
                    const [docum] = await ModelUsuarios.findCreateFind({
                        where: { cnpj }
                    })
                    return res.json("Cnpj ja Cadastrado");
                } catch (error) {


                    const usuarios = await ModelUsuarios.create(
                        {
                            id: req.body.id,
                            codigo: parseInt(Math.random() * (100000 - 1000) + 1000),
                            logo: req.body.logo,
                            nome: req.body.nome,
                            cnpj: req.body.cnpj,
                            inscricao: req.body.inscricao,
                            email: req.body.email,
                            empresa: req.body.empresa,
                            telefone: req.body.telefone,
                            usuario: req.body.usuario,
                            senha: req.body.senha,
                            assinatura: req.body.assinatura,
                            tipo_cadastro: req.body.tipo_cadastro,
                            estado: req.body.estado,
                            cidade: req.body.cidade,
                            data_registro: new Date(),
                            createdAt: new Date(),
                            updatedAt: new Date(),
                    
                        }
                    );
                    
                    return res.json(usuarios);


                }

            }
        }
    },

    async Update(req, res) {
        try {

            const usuarios = await ModelUsuarios.findByPk(req.body.id);
            if (usuarios) {
                usuarios.logo = req.body.logo;
                usuarios.nome = req.body.nome;
                usuarios.cnpj = req.body.cnpj;
                usuarios.inscricao = req.body.inscricao;
                usuarios.email = req.body.email;
                usuarios.empresa = req.body.empresa;
                usuarios.telefone = req.body.telefone;
                usuarios.usuario = req.body.usuario;
                usuarios.senha = req.body.senha;
                usuarios.assinatura = req.body.assinatura;
                usuarios.tipo_cadastro = req.body.tipo_cadastro;
                usuarios.estado = req.body.estado;
                usuarios.cidade = req.body.cidade;
                await usuarios.save();
            }

            return res.json(usuarios);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

    async GetOne(req, res) {
        try {

            const usuarios = await ModelUsuarios.findByPk(req.body.id);

            return res.json(usuarios);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

    async Delete(req, res) {
        try {

            const usuarios = await ModelUsuarios.findByPk(req.body.id);
            await usuarios.destroy();
            return res.json(usuarios);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    }


}