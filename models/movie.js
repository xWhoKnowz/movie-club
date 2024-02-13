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
        type: DataTypes.TEXT,
        allowNull: false,
      },
      rating: {
          type: DataTypes.DECIMAL (10,1),
          allowNull: false,
      },
      list_id: {
        type: DataTypes.INTEGER,
        references: {
          model: `list`,
          key: `id`          
        },
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: `user`,
          key: `id`          
        },
        allowNull: false
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