const jwt = require("jsonwebtoken");

const secret = "mysecretssshhhhhhh";
const expiration = "2h";
module.exports = {
  withAuth: (req, res, next) => {
    // If not logged in, redirect
    if (!req.session.logged_in) {
      res.redirect("/login");
    } else {
      next();
    }
  },
  authMiddleware: function({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token
        .split(" ")
        .pop()
        .trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }

    return req;
  },
  signToken: function({ email, username, id }) {
    const payload = { email, username, id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
