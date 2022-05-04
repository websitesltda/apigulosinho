const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Resultados extends sequelize.Model { }


Resultados.init(
    {
        id:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        checklist:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        id_funcionario:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        cvi:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        pdf:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        perguntas:
        {
            type: sequelize.STRING('MAX'),
            allowNull: true,
        },
        respostas:
        {
            type: sequelize.STRING('MAX'),
            allowNull: true,
        },
        data_registro:
        {
            type: sequelize.DATE,
            allowNull: false,
        }
    },
    {
        sequelize: database, modelName: 'resultados', shema
    }
)

module.exports = Resultados;