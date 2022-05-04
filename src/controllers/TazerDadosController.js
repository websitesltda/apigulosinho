const ModelUsuarios = require('../models/usuarios');
const ModelFuncionarios = require('../models/funcionarios');

module.exports =
{
    async List(req, res) {
        try {
            const codigo = req.body.cd_impresa;
            const [tech] = await ModelUsuarios.findCreateFind({
                where: { codigo }
            })

            const usuarios = await ModelUsuarios.findAll({
                where: [{ codigo: [codigo] }]
            });
   
            return res.json(usuarios);

        } catch (erro) {
            try {
                const codigoF = req.body.cd_funcionario;
                const [tech] = await ModelFuncionarios.findCreateFind({
                    where: { codigoF }
                })
                const funcionarios = await ModelFuncionarios.findAll({
                    where: [{ codigoF: [codigoF] }]
                });
       
                return res.json(funcionarios);
    
            } catch (erro) {
                return res.json({
                    erro: true,
                    mensagem: "Erro"
                });
            }
        }
    }

}