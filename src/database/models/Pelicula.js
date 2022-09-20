const {sequelize, DataTypes} = require('sequelize')
const Genero = require('./Genero');

module.exports = (sequelize,DataTypes) => {

    const alias = "Pelicula";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        } ,
        title: {
            type: DataTypes.STRING(500),
            allowNull: false
        } ,
        rating: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        awards: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        length: {
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        genre_id: {
            type: DataTypes.INTEGER,
            defaultValue: null,
            references: {
                model: Genero,
                key: 'id'
            }
        }
    }

    const other = {
        tableName: "movies",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
        }
 
    const Pelicula = sequelize.define(alias, cols,other)
    return Pelicula;
}