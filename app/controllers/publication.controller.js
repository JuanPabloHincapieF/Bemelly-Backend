const Publication = require("../models/publication.model");

const newPublication = async (req, res) => {
  try {
    const publication = req.body;
    await Publication.create(publication);
    res.status(200).send("Publicacion creada correctamente");
  } catch (err) {
    res.status(400).send(err);
  }
};

const deletePublication = async (req, res) => {
  const publication = req.body;
  await Publication.findOneAndDelete({ id: publication.id });
  res.send("se ha eliminado el usuario correctamente");
};

module.exports = {
  newPublication,
  deletePublication,
};
