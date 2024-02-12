const sequelize = require('../config/connection');
const { User, Review, Comment, List, Movie } = require('../models');

const userData = require('./userData.json');
const reviewData = require('./reviewData.json');
const movieData = require('./movieData.json');
const listData = require('./listData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({force: true});
  
    const users = await User.bulkCreate(userData, {
    returning: true,
    });

    const lists = await List.bulkCreate(listData, {
    });

    for (const movies of movieData) {
      await Movie.create({
        ...movies,
        list_id: lists[Math.floor(Math.random() * users.length)].id,
      });
    }  

    for (const reviews of reviewData) {
      await Review.create({
        ...reviews,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
    }

    for (const comments of commentData) {
        await Comment.create({
          ...comments,
          users_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    process.exit(0);
  };
  
  seedDatabase();