const { underscoredIf } = require("sequelize/lib/utils");
module.exports = function(sequelize, dataTypes) {
    let alias = 'Product';
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        title:{
            type: dataTypes.STRING,
        },
        imagen:{
            type: dataTypes.STRING,
        },
        nombre:{
            type: dataTypes.STRING,
        },
        descripción:{
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
        // falta id_usuarios
    };
    let config = {
        tableName: 'movies',
        timestamps: true,
        underscored: true
    };
    let Movie = sequelize.define(alias, cols, config)
    return Movie
}