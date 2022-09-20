const {sequelize, DataTypes} = require('sequelize')
const Pelicula = require('./Pelicula');

module.exports = (sequelize,DataTypes) => {

    const alias = "Actor";

    const cols = {

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        
        first_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        last_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        rating: {
            type: DataTypes.FLOAT,
            defaultValue: null
        } ,

        favorite_movie_id:{
            references: {
                model: Pelicula,
                key: 'id'
            },
            type: DataTypes.INTEGER,
            defaultValue: null
        }

    }

    const other = {
        tableName: "actors",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
        }

    const Actor = sequelize.define(alias,cols,other);
    return Actor;

}