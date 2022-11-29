const express = require("express");
/* const userIdAndIsAdminExtractor = require("../middlewares/verifyUser"); */

const {
  createNewUser,
  updateUser,
} = require("../controllers/user/user.controller");

const router = express.Router();

router.post("/newUser", createNewUser);
router.put("/update", /* userIdAndIsAdminExtractor , */ updateUser);

module.exports = router;
