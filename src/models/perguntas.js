const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Perguntas extends sequelize.Model { }


Perguntas.init(
    {
        id:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        id_categoria:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        cd_impresa:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        perguntaPT:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        perguntaEN:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        assinalar:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        assinatura:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        escrever:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        tituloPT:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        tituloEN:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        ordem:
        {
            type: sequelize.INTEGER,
            allowNull: true,
        },
        data_registro:
        {
            type: sequelize.DATE,
            allowNull: false,
        }
    },
    {
        sequelize: database, modelName: 'perguntas', shema
    }
)

module.exports = Perguntas;