const router = require('express').Router();
const { List, Movie, Review, User } = require('../models');

router.get (`/`, async (req, res) =>{
try {
    const listData = await List.findByPk(req.params.id, {
        include: [
            {
                model: Movie,
                attributes: [title, poster, rating]
            },
        ],
    });

    const curatedList = listData.get({ plain: true })

    res.render(`homepage`, {
        curatedList,
        logged_in: req.session.logged_in
    });
} catch (error) {
    res.status(500).json(error)
}
});