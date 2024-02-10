const router = require('express').Router();
const { Review } = require('../../models');
const withAuth = require('../../utils/withAuth');

// get route to find all reviews (non mandatory rn!)

// post route to create a review
router.post('/', withAuth, async (req, res) => {
    try {
        const newReview = await Review.create({
            // user id to create a user review
            ...req.body,
            user_id: req.session.user_id
        });

        res.status(200).json(newReview);
    } catch (err) {
        res.status(400).json(err);
    }
});
// put route to update review
router.put('/:id', withAuth, async (req, res)=> {
    try {
        const updatedReview = await Review.update({
            title: req.body.title,
            body: req.body.body,
            rating: req.body.rating
        },
        {
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
                movie_id: req.params.movie_id
            }
        });

        if (!updatedReview) {
            res.status(404).json({ message: `Couldn't update this review, please try again!`});
            return;
        }

        res.status(200).json(updatedReview);
    } catch (err) {
        res.status(500).json(err)
    }
});

// delete route destroy review
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const destroyReview = await Review.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
          movie_id: req.body.movie_id
        },
      });
  
      if (!destroyReview) {
        res.status(404).json({ message: 'No review found!' });
        return;
      }
  
      res.status(200).json(destroyReview);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;