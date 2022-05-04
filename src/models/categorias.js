const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Categorias extends sequelize.Model { }


Categorias.init(
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
        foto:
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
        sequelize: database, modelName: 'categoria_perg', shema
    }
)

module.exports = Categorias;