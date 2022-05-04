const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Funcionarios extends sequelize.Model { }


Funcionarios.init(
    {
        id:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        codigoF:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        cd_impresa:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        nome:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        email:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        telefone:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        usuario:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        senha:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        assinatura:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        data_registro:
        {
            type: sequelize.DATE,
            allowNull: false,
        }
    },
    {
        sequelize: database, modelName: 'funcionarios', shema
    }
)

module.exports = Funcionarios;