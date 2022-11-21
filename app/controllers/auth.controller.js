const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const user = req.body;
  const dbUser = await User.findOne({ email: user.email });

  if (!dbUser) {
    res.status(404).send("Hubo un error");
  }

  const isCorrectPassword = await bcrypt.compare(
    user.password,
    dbUser.password
  );

  if (isCorrectPassword && dbUser.isActive) {
    const token = jwt.sign(
      {
        name: dbUser.name,
        email: dbUser.email,
        role: dbUser.role,
      },
      process.env.SECRET_KEY
    );

    res.status(200).json({
      ok: true,
      token,
    });
  } else if (isCorrectPassword && !dbUser.isActive) {
    res.status(403).json({
      message: "El usuario esta inactivo",
    });
  } else {
    res.status(403).json({
      message: "Contraseña incorrecta",
    });
  }
};

module.exports = login;
