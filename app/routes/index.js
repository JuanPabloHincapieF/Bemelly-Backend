module.exports = (app) => {
  app.use("/api/users", require("./user.route"));
};
