const router = require('express').Router();
const { Movie, List } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newMovie = await Movie.create({
        id: req.params.id,
        runTime: req.params.runtime,
        title: req.params.original_title,
        poster: req.params.Poster,
        summary: req.params.overview,
        rating: req.params.body.User,
        list_id: req.body.list_id,
    });

    const newMovieListId = await List.create({
        listId: req.body.list_id,
    });

    res.status(200).json(newMovie + " " + newMovieListId);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const movieData = await Movie.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!movieData) {
      res.status(404).json({ message: 'No movie found with this id!' });
      return;
    }

    res.status(200).json(movieData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
