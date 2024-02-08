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
        type: DataTypes.INTEGER,
        references: {
          model: `list`,
          key: `id`          
        },
        allowNull: false
      }
    },
    {
      // hooks: {
      //   beforeCreate: async (newUserData) => {
      //     newUserData.password = await bcrypt.hash(newUserData.password, 10);
      //     return newUserData;
      //   },
      // },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'movie',
    }
  );
  
  module.exports = Movie;