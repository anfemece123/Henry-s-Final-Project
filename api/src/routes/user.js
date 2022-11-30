const express = require("express");
/* const userIdAndIsAdminExtractor = require("../middlewares/verifyUser"); */

const {
  createNewUser,
  updateUser,
  getUserDetail,
  getAllUsers,
  deleteUser,
} = require("../controllers/user/user.controller");

const router = express.Router();

router.post("/newUser", createNewUser);
router.put("/update", /* userIdAndIsAdminExtractor , */ updateUser); //only users
router.get("/allUsers", /* userIdAndIsAdminExtractor , */ getAllUsers); ////only admin
router.get("/:id", /* userIdAndIsAdminExtractor , */ getUserDetail); // users and admin
router.put("/delete/:id" /* userIdAndIsAdminExtractor , */, deleteUser); //only admin
module.exports = router;
