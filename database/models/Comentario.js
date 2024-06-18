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
        created_at:{
            type: dataTypes.DATE,
        },
        updated_at:{
            type: dataTypes.DATE,
        },
        deleted_at:{
            type: dataTypes.DATE,
        },
        id_usuarios:{
            type: dataTypes.INTEGER,
        },
        id_productos:{
            type: dataTypes.INTEGER,
        }
    };
    let config = {
        tableName: 'comentarios',
        timestamps: true,
        underscored: true
        //esto va a ser true cuando pongamos las relaciones entre las tablas
    };
    let Comentario = sequelize.define(alias, cols, config)
    Comentario.associate= function(models){
        Comentario.belongsTo(models.Usuario,{
            as: 'usuario',
            foreignKey: 'id_usuarios'
        })

        Comentario.belongsTo(models.Product,{
            as: 'producto',
            foreignKey: 'id_productos'
        })
    };
    return Comentario
    
}