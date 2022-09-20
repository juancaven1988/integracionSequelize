const {sequelize, DataTypes} = require('sequelize')

module.exports = (sequelize,DataTypes) => {

    const alias = "Genero";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true

        },
 
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        } ,

        ranking: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaulValue: true
        }
    }
    const other = {
        tableName: "genres",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
        }

    
    const Genero = sequelize.define(alias,cols,other)
    return Genero

}