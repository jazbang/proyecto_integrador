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
            type: dataTypes.DATE,
        },
        updatedAt:{
            type: dataTypes.DATE,
        },
        deletedAt:{
            type: dataTypes.DATE,
        },
    };
    let config = {
        tableName: 'usuarios',
        timestamps: true,
        underscored: true
    };
    let Usuario = sequelize.define(alias, cols, config);
    Usuario.associate= function(models){
        Usuario.hasMany(models.Producto,{
            as: 'productos',
            foreignKey: 'id_usuarios'
        })

        Usuario.hasMany(models.Comentario,{
            as: 'comentarios',
            foreignKey: 'id_usuarios'
        })
    };
    return Usuario
}