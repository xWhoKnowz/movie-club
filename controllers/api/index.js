const router = require(`express`).Router();
const userRoutes = require(`./userRoutes`);
const movieRoutes = require(`./movieRoutes`);
const listRoutes = require(`./listRoutes`);
const reviewRoutes = require(`./reviewRoute`);
const commentRoutes = require(`./commentRoute`);

router.use(`/users`, userRoutes);
router.use(`/movie`, movieRoutes);
router.use(`/list`, listRoutes);
router.use(`/review`, reviewRoutes);
router.use(`/comment`, commentRoutes);

module.exports = router;