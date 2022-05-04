const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Checklist extends sequelize.Model { }


Checklist.init(
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
        cod_checklist:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        num_contrato:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        empresa_origem:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        empresa_destino:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        numero_container:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        numero_oic:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        quantidade:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        status:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        data:
        {
            type: sequelize.DATE,          
            allowNull: false,
        },
        data_registro:
        {
            type: sequelize.DATE,
            allowNull: false,
        }
    },
    {
        sequelize: database, modelName: 'checklist', shema
    }
)

module.exports = Checklist;