const router = require(`express`).router();
const userRoutes = require(`./userRoutes`)

router.use(`/users`, userRoutes)

module.exports = router;