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
        contrasenia:{
            type: dataTypes.STRING,
        },
        fecha:{
            type: dataTypes.DATE,
        },
        dni:{
            type: dataTypes.FLOAT,
        },
        foto:{
            type: dataTypes.STRING,
        },
        created_at:{
            type: dataTypes.DATE,
        },
        updated_at:{
            type: dataTypes.DATE,
        },
        deleted_at:{
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
        Usuario.hasMany(models.Product,{
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