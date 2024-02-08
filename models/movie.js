const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model {}

Movie.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      run_time: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      poster: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      summary: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      list_id: {
        type: DataTypes.STRING,
        references:{
          model: 'list',
          key: 'id',
        } 
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'movie',
    }
  );
  
  module.exports = Movie;