const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Lists extends Model {}

Lists.init(
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
    review: {
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
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'list',
  }
);

module.exports = Lists;
