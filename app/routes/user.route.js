const express = require("express");
const router = express.Router();
const {
  getUsers,
  newUser,
  modifyUser,
  deleteUser,
} = require("../controllers/user.controllers");

router.get("/getUsers", getUsers);
router.post("/newUser", newUser);
router.put("/modifyUser", modifyUser);
router.delete("/deleteUser", deleteUser);

module.exports = router;
