const User = require('./user');
const Movie = require('./movie');
const List = require('./list');
const Review = require('./review');
const Comment = require('./comment');

User.hasMany(List, {
    foreignKey: 'user_id',
});

List.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Review.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

List.hasMany(Movie, {
    foreignKey: 'list_id',
});

Movie.belongsTo(List, {
    foreignKey: 'list_id',
});

Movie.hasMany(Review, {
    foreignKey: 'movie_id',
    onDelete: 'CASCADE'
})

Review.belongsTo(Movie, {
    foreignKey: 'movie_id'
});

Review.hasMany(Comment, {
    foreignKey: 'review_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Review, {
    foreignKey: 'review_id',
});

module.exports = { User, Movie, List, Review, Comment};