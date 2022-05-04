const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Empresas extends sequelize.Model { }


Empresas.init(
    {
        id:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        cd_impresa:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        codigo_impresa:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        nome:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        cnpj:
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
        celular:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        estado:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        cidade:
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
        sequelize: database, modelName: 'empresas', shema
    }
)

module.exports = Empresas;