const express = require("express");
/* const userIdAndIsAdminExtractor = require("../middlewares/verifyUser"); */

const {
  createNewUser,
  updateUser,
  getUserDetail,
  getAllUsers,
} = require("../controllers/user/user.controller");

const router = express.Router();

router.post("/newUser", createNewUser);
router.put("/update", /* userIdAndIsAdminExtractor , */ updateUser);
router.get("/allUsers", /* userIdAndIsAdminExtractor , */ getAllUsers);
router.get("/:id", /* userIdAndIsAdminExtractor , */ getUserDetail);

module.exports = router;
