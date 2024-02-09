const isAdmin = (req, res, next) => {
    if (!req.session.is_admin) {
      res.redirect('/');
    } else {
      next();
    }
  };
  
  module.exports = isAdmin;