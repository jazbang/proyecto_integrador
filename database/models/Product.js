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
            type: dataTypes.DATE,
        },
        updatedAt:{
            type: dataTypes.DATE,
        },
        deletedAt:{
            type: dataTypes.DATE,
        },
        // falta id_usuarios
    };
    let config = {
        tableName: 'productos',
        timestamps: true,
        underscored: true
    };
    let Product = sequelize.define(alias, cols, config)
    return Product
}