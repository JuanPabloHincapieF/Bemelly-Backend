const express = require("express");
const router = express.Router();
const {
  getUsers,
  newUser,
  modifyUser,
} = require("../controllers/user.controllers");

router.get("/getUsers", getUsers);
router.post("/newUser", newUser);
router.put("/modifyUser", modifyUser);

module.exports = router;
