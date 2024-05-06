const { underscoredIf } = require("sequelize/lib/utils");
module.exports = function(sequelize, dataTypes) {
    let alias = 'Usuario';
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        email:{
            type: dataTypes.STRING,
        },
        contraseña:{
            type: dataTypes.STRING,
        },
        fecha:{
            type: dataTypes.DATE,
        },
        dni:{
            type: dataTypes.FLOAT,
        },
        fotoPerfil:{
            type: dataTypes.STRING,
        },
        createdAt:{
            type: dataTypes.DATETIME,
        },
        updatedAt:{
            type: dataTypes.DATETIME,
        },
        deletedAt:{
            type: dataTypes.DATETIME,
        },
    };
    let config = {
        tableName: 'usuarios',
        timestamps: true,
        underscored: true
    };
    let Usuario = sequelize.define(alias, cols, config)
    return Usuario
}