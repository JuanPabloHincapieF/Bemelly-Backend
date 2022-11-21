const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const getUsers = async (req, res) => {
  const result = await User.find();
  res.send(result);
};

const newUser = async (req, res) => {
  try {
    const user = req.body;
    const passwordHash = await bcrypt.hash(user.password, saltRounds);

    if (passwordHash) {
      user.password = passwordHash;
    }
    await User.create(user);
    res.status(200).send("Se ha creado el usuario correctamente");
  } catch (err) {
    res.status(400).send(err);
  }
};

const modifyUser = async (req, res) => {
  const user = req.body;
  await User.findOneAndUpdate({ CC: user.CC }, { name: user.name });
  await User.findOneAndUpdate({ CC: user.CC }, { email: user.email });
  await User.findOneAndUpdate({ CC: user.CC }, { role: user.role });
  res.send("el usuario ha sido modificado");
};

const deleteUser = async (req, res) => {
  const user = req.body;
  await User.findOneAndDelete({ CC: user.CC });
  res.send("se ha eliminado el usuario correctamente");
};
module.exports = { getUsers, newUser, modifyUser, deleteUser };
