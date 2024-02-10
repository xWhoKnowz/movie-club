const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/withAuth');

// post route to create a Comment
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            // user id and review id to create a user comment
            ...req.body,
            user_id: req.session.user_id,
            review_id: req.params.review_id
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});
// put route to update Comment
router.put('/:id', withAuth, async (req, res)=> {
    try {
        const updatedComment = await Comment.update({
            body: req.body.body
        },
        {
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
                review_id: req.params.review_id
            }
        });

        if (!updatedComment) {
            res.status(404).json({ message: `Couldn't update this comment, please try again!`});
            return;
        }

        res.status(200).json(updatedComment);
    } catch (err) {
        res.status(500).json(err)
    }
});

// delete route destroy Comment
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const destroyComment = await Comment.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
          review_id: req.params.review_id
        },
      });
  
      if (!destroyComment) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
  
      res.status(200).json(destroyComment);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;