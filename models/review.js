const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    movie_id: {
      type: DataTypes.INTEGER,
        references: {
          model: `movie`,
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
    },
    rating: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'review',
  }
);

module.exports = Review;
