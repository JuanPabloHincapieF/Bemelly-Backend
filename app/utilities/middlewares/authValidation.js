const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const tokenValidation = (req, res, next) => {
  const token = req.body.token;

  if (!token) {
    return res.status(403).send("se necesita un token para la autenticacion!");
  }

  try {
    jwt.verify(token, SECRET_KEY);
    // req.user = decoded;
  } catch (err) {
    return res.status(401).send("token invalido");
  }

  return next();
};

module.exports = {
  tokenValidation,
};
