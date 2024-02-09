const router = require('express').Router();
const { List, Movie, Review, User } = require('../models');
const withAuth = require('../utils/withAuth')
const isAdmin = require('../utils/isAdmin');

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

router.get(`/admin`, [withAuth, isAdmin], async (req, res) =>{
    try {

        res.render(`admin`, {

        
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get(`/login`, (req, res) => {
    if (req.session.logged_in){
        res.redirect(`/homepage`)
        return;
    } else {
        res.render(`login`);
    };
});

module.exports = router;