const router = require(`express`).router();
const { user } = require(`../../models`);

router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;

      res.status(200).json(newUser);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post(`/login`, async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      res
        .status(400)
        .json({
          message: `Password and email do not match. Please try again.`,
        });
      return;
    }

    const password = await userData.checkPassword(req.body.password);

    if (!password) {
      res
        .status(400)
        .json({
          message: `Password and email do not match. Please try again.`,
        });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: user, message: "Welcome to Fresh Tomatoes!" });
    });
  } catch (error) {
    res.status(400).json(error)
  };
});

router.post(`/logout`, (req,res) => {
  if (req.session.logged_in){
    req.session.destroy(()=>{
      res.status(200).end()
    });
  } else {
    res.status(400).end()
  }
});

module.exports = router;
