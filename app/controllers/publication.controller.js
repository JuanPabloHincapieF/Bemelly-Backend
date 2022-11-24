const Publication = require("../models/publication.model");
const Counter = require("../models/counter.model");

const newPublication = async (req, res) => {
  try {
    let publication = req.body;
    publication.id = await publicationCounter();
    await Publication.create(publication);
    res.status(200).send("Publicacion creada correctamente");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const deletePublication = async (req, res) => {
  try {
    const publication = req.body;
    await Publication.findOneAndDelete({
      id: publication.id,
      ownerCC: publication.ownerCC,
    });
    res.send("Se ha eliminado la publicacion correctamente");
  } catch (err) {
    res.status(404).send(err.message);
  }
};

const modifyPublication = async (req, res) => {
  const publication = req.body;
  await Publication.findOneAndUpdate(
    { id: publication.id },
    { serviceName: publication.serviceName }
  );
  await Publication.findOneAndUpdate(
    { id: publication.id },
    { description: publication.description }
  );
  await Publication.findOneAndUpdate(
    { id: publication.id },
    { price: publication.price }
  );
  res.send("la publicacion ha sido modificada");
};

const publicationCounter = async () => {
  let contador = await Counter.findOne({ id: "publicationCounter" });
  newValue = contador.seq_value + 1;
  await Counter.findOneAndUpdate(
    { id: "publicationCounter" },
    { seq_value: newValue }
  );
  return contador.seq_value;
};
module.exports = {
  newPublication,
  deletePublication,
  modifyPublication,
};
