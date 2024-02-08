const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Lists extends Model {}

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
    modelName: 'list',
  }
);

module.exports = Lists;
