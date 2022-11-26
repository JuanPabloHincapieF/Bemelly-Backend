const express = require("express");
const login = require("../controllers/auth.controller");
const { tokenValidation } = require("../utilities/middlewares/authValidation");
const router = express.Router();

router.post("/login", login);
router.post("/tokenValidation", tokenValidation, (req, res) => {
  res.status(200).json({
    ok: true,
  });
});
module.exports = router;
