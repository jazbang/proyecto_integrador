const { underscoredIf } = require("sequelize/lib/utils");
module.exports = function(sequelize, dataTypes) {
    let alias = 'Product';
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        imagen:{
            type: dataTypes.STRING,
        },
        nombre:{
            type: dataTypes.STRING,
        },
        descripcion:{
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
        id_usuarios:{
            type: dataTypes.INTEGER,
        }
    };
    let config = {
        tableName: 'productos',
        timestamps: true,
        underscored: true
    };
    let Product = sequelize.define(alias, cols, config)
    Product.associate= function(models){
        Product.belongsTo(models.Usuario,{
            as: 'usuario',
            foreignKey: 'id_usuarios'
        })

        Product.hasMany(models.Comentario,{
            as: 'comentarios',
            foreignKey: 'id_productos'
        })
    };
    return Product
    
}