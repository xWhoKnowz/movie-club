const router = require('express').Router();
const { Movie } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', [withAuth, isAdmin], async (req, res) => {
  try {
    const newMovie = await Movie.create({
        id: req.body.id,
        run_time: req.body.runtime,
        title: req.body.original_title,
        poster: req.body.Poster,
        summary: req.body.overview,
        rating: req.body.rating,
        list_id: req.body.list_id,
    });

    res.status(200).json(newMovie);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', [withAuth, isAdmin], async (req, res) => {
  try {
    const movieData = await Movie.destroy({
      where: {
        id: req.params.id,
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
