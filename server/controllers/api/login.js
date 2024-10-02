const router = require("express").Router();
const { User } = require("../../models");
const { withAuth } = require("../../utils/auth");

// localhost:3000/api

// router.get("/", isAuthenticated, function(req, res) {
//   // this is only called when there is an authentication user due to isAuthenticated
//   res.send(
//     "hello, " +
//       escapeHtml(req.session.user) +
//       "!" +
//       ' <a href="/logout">Logout</a>'
//   );
// });

router.post("/signup", async function(req, res) {
  try {
    //**************WORKING************ */
    const { username, email, password } = req.body;

    const userData = await User.create({ username, email, password });
    console.log(userData);

    //! *************Not Working************ */
    // req.session.save(() => {
    //   req.session.user_id = userData.id;
    //   req.session.logged_in = true;
    //   // all good status
    // res.status(200).json(userData);
    // });

    res.status(200).json(userData);
  } catch (err) {
    // err for a bad request
    res.status(400).json(err);
  }
});

router.post("/login", async function(req, res) {
  try {
    // looks for matching email in the database
    const userData = await User.findOne({ where: { email: req.body.email } });
    // if there's no match....
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again." });
      return;
    }
    // now check if the password matches the email
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again." });
      return;
    }
    // save login to the session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "Welcome! You are logged in." });
    });

    // res.render page?
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/allusers", async function(req, res) {
  try {
    const allUsers = await User.findAll();
    res.json(allUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/logout", function(req, res, next) {
//   // logout logic

//   // clear the user from the session object and save.
//   // this will ensure that re-using the old session id
//   // does not have a logged in user
//   req.session.user = null;
//   req.session.save(function(err) {
//     if (err) next(err);

//     // regenerate the session, which is good practice to help
//     // guard against forms of session fixation
//     req.session.regenerate(function(err) {
//       if (err) next(err);
//       res.redirect("/");
//     });
//   });
// });

module.exports = router;
