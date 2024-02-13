const router = require(`express`).Router();
const { Movie } = require(`../../models`);
const withAuth = require(`../../utils/withAuth`);
const isAdmin = require(`../../utils/isAdmin`);

router.post('/', [withAuth, isAdmin], async (req, res) => {
  try {
    console.log(req.body);

    const newMovie = await Movie.create({
        // id: req.body.id,
        title: req.body.movieTitle,
        poster: req.body.moviePoster,
        rating: req.body.movieRating,
        run_time: req.body.movieRuntime,
        summary: req.body.movieSummary,
        list_id: 1
        // list_id: req.body.list_id
    });

    // {
    //   movieTitle: 'The Matrix',
    //   moviePoster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    //   movieRating: { Source: 'Rotten Tomatoes', Value: '83%' },
    //   movieRuntime: '136 min',
    //   movieSummary: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.'
    // }

    res.status(200).json(newMovie);
  } catch (err) {
    console.log(err);
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
