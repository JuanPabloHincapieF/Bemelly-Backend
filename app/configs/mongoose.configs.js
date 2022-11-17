const mongoose = require("mongoose");
const { PORT, HOST, MONGO_URI } = process.env;

module.exports = (app) => {
  mongoose.connect(MONGO_URI).then(() => {
    app.listen(PORT, () => {
      console.log(
        `El servidor esta escuchando en el puerto ${HOST}:${PORT} ...`
      );
    });
  });
};
