require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

require("./app/configs/cors.configs")(app);

require("./app/routes")(app);

require("./app/configs/mongoose.configs")(app);
