const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const user = req.body;
  try {
    const dbUser = await User.findOne({ email: user.email });

    if (!dbUser) {
      return res.status(404).send("Hubo un error");
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
          role: dbUser.Role,
        },
        process.env.SECRET_KEY
      );

      return res.status(200).json({
        ok: true,
        token,
      });
    } else if (isCorrectPassword && !dbUser.isActive) {
      return res.status(403).json({
        message: "El usuario esta inactivo",
      });
    } else {
      return res.status(403).json({
        message: "Contraseña incorrecta",
      });
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = login;
