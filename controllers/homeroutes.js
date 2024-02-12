const router = require('express').Router();
const { List, Movie, Review, User } = require('../models');
const withAuth = require('../utils/withAuth')
const isAdmin = require('../utils/isAdmin');

router.get (`/`, async (req, res) =>{
try {
    // const listData = await List.findByPk(req.params.id, {
    //     include: [
    //         {
    //             model: Movie,
    //             attributes: [title, poster, rating, run_time, summary]
    //         },
    //     ],
    // });

    // const curatedList = listData.get({ plain: true })

    res.render(`homepage`, {
        // curatedList,
        // logged_in: req.session.logged_in
    });
} catch (error) {
    console.log(error);
    res.status(500).json(error);
}
});

router.get(`/admin`, [withAuth, isAdmin], async (req, res) =>{
    try {

        const lists = await List.findAll({
            include: [
                {
                    model: Movie,
                    attributes: [title, poster, rating, run_time, summary]
                },
            ],
        });
    
        const allLists = lists.get({ plain: true })


        res.render(`admin`, {
            allLists,
            logged_in: req.session.logged_in
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

router.get(`/movie`, withAuth, async (req, res) => {
    try {
        
        const movieData = await Movie.findByPk(req.params.id, {
            include:[
                {
                    model: Review,
                    attributes: [title, body, rating]
                },
                {
                    model:Comment,
                    attributes:[body]
                },
                {
                    model: User,
                    attributes: username
                }
            ]
        });

        const movieList = movieData.get({ plain: true })

        res.render(`homepage`, {
            movieList,
            logged_in: req.session.logged_in
        });
        
    } catch (error) {
        res.status(500).json(error)
    }
});


router.get(`/user`, withAuth, async (req, res) => {
    try {
        const userData = User.findByPk(req.session.user_id, {
            attributes: { exclude:[`password`]},
            include: [{model: Review}]
        })

        const user = userData.get({ plain: true });

        res.render(`user`, {
         ...user,
         logged_in: true   
        });    
    } catch (error) {
        res.status(500).json(err);
    }
});

module.exports = router;