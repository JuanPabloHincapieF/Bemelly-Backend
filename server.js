require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { PORT, HOST, MONGO_URI } = process.env;
const app = express();
app.use(express.json());

require("./app/routes")(app);

mongoose.connect(MONGO_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto ${HOST}:${PORT} ...`);
  });
});
