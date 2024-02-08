const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Project.init(
  {
    id: {

    },
    title: {

    },
    body: {

    },
    movie_id: {

    },
    user_id: {

    },
    status: {

    },
    created_at: {

    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
  }
);

module.exports = Review;
