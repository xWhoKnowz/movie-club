const router = require("express").Router();
const { List, User } = require("../../models");
const withAuth = require("../../utils/withAuth");
const isAdmin = require("../../utils/isAdmin");

router.post("/", [withAuth, isAdmin], async (req, res) => {
  try {
    const newList = await List.create({
      id: req.body.id,
      runTime: req.body.runtime,
      title: req.body.original_title,
      poster: req.body.Poster,
      summary: req.body.overview,
      user_id: req.session.user_id,
    });
    res.status(200).json(newList);
  } catch (err) {
    res.status(400).json(err);
  }
});

//update list if user === true
router.put("/:id", [withAuth, isAdmin], async (req, res) => {
  try {
    const updateList = await List.update(
      {
        run_time: req.body.runtime,
        title: req.body.original_title,
        poster: req.body.Poster,
        summary: req.body.overview,
        user_id: req.session.user_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.json(updateList);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", [withAuth, isAdmin], async (req, res) => {
  try {
    const listData = await List.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!listData) {
      res.status(404).json({ message: "No list found with this id!" });
      return;
    }

    res.status(200).json(listData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
