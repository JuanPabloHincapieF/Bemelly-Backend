module.exports = (app) => {
  app.use("/api/users", require("./user.route"));
  app.use("/api/auth", require("./auth.route"));
  app.use("/api/publication", require("./publication.route"));
};
