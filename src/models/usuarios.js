const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Usuarios extends sequelize.Model { }


Usuarios.init(
    {
        id:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        codigo:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        logo:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        nome:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        empresa:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        cnpj:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        inscricao:
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
        tipo_cadastro:
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
        sequelize: database, modelName: 'usuarios', shema
    }
)

module.exports = Usuarios;