const router = require('express').Router();
const { User, List } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newList = await List.create({
        id: req.params.id,
        runTime: req.params.runtime,
        title: req.params.original_title,
        poster: req.params.Poster,
        summary: req.params.overview,
        rating: req.params.body.User,
    });

    const newListUser = await User.create({
        userId: req.body.user_id,
    });

    res.status(200).json(newList);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const listData = await List.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!listData) {
      res.status(404).json({ message: 'No list found with this id!' });
      return;
    }

    res.status(200).json(listData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
