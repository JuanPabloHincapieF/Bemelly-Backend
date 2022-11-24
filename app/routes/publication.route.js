const express = require("express");
const router = express.Router();
const {
  newPublication,
  deletePublication,
  modifyPublication,
} = require("../controllers/publication.controller");

router.post("/newPublication", newPublication);
router.delete("/deletePublication", deletePublication);
router.put("/modifyPublication", modifyPublication);

module.exports = router;
