module.exports = {
  withAuth: (req, res, next) => {
    // If not logged in, redirect
    if (!req.session.logged_in) {
      res.redirect("/login");
    } else {
      next();
    }
  },
};
