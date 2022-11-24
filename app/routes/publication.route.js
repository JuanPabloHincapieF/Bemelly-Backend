const express = require("express");
const router = express.Router();
const {
  newPublication,
  deletePublication,
} = require("../controllers/publication.controller");

router.post("/newPublication", newPublication);
router.delete("/newPublication", deletePublication);

module.exports = router;
