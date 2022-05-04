const ModelCategorias = require('../models/categorias');

module.exports =
{
    async List(req, res) {
        try {
            const cd_impresa = req.body.cd_impresa;
            const categorias = await ModelCategorias.findAll(
                {
                    where: [{ cd_impresa: [cd_impresa] }],
                    order: [['ordem', 'ASC']]
                    
                }
            );
            return res.json(categorias);

        } catch (erro) {
            return console.error("Erro na List : ", erro);
        }
    },

    async Create(req, res) {
        try {
            const categorias = await ModelCategorias.create(
                {
                    id: req.body.id,
                    cd_impresa: req.body.cd_impresa,
                    tituloPT: req.body.tituloPT,
                    tituloEN: req.body.tituloEN,
                    foto: req.body.foto,
                    ordem: req.body.ordem,
                    data_registro: new Date()
                }
            );
            return res.json(categorias);

        } catch (erro) {
            return console.error("Erro ao criar nova categoria : ", erro);
        }
    },

    async Update(req, res) {
        try {

            const categorias = await ModelCategorias.findByPk(req.body.id);
            if (categorias) {
                categorias.tituloPT = req.body.tituloPT;
                categorias.tituloEN = req.body.tituloEN;
                categorias.foto = req.body.foto;
                categorias.ordem = req.body.ordem;
                await categorias.save();
            }

            return res.json(categorias);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

    async GetOne(req, res) {
        try {

            const categorias = await ModelCategorias.findByPk(req.body.id);

            return res.json(categorias);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },

    async Delete(req, res) {
        try {

            const categorias = await ModelCategorias.findByPk(req.body.id);
            await categorias.destroy();
            return res.json(categorias);

        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    }


}