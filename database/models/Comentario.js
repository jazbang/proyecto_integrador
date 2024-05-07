const { underscoredIf } = require("sequelize/lib/utils");
module.exports = function(sequelize, dataTypes) {
    let alias = 'Comentario';
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        comentario:{
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
        tableName: 'comentarios',
        timestamps: true,
        underscored: true
        //esto va a ser true cuando pongamos las relaciones entre las tablas
    };
    let Comentario = sequelize.define(alias, cols, config)
    return Comentario
}