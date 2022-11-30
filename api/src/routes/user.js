const express = require("express");
/* const {verifyToken, verifyTokenAndIsAdmin } = require("../middlewares/verifyUser"); */

const {
  createNewUser,
  updateUser,
  getUserDetail,
  getAllUsers,
  deleteUser,
} = require("../controllers/user/user.controller");

const router = express.Router();

router.post("/newUser", createNewUser);
router.put("/update", /* verifyToken , */ updateUser); //only users
router.get("/allUsers", /* verifyTokenAndIsAdmin , */ getAllUsers); ////only admin
router.get("/:id", /* verifyToken , */ getUserDetail); // users and admin
router.put("/delete/:id" /* verifyTokenAndIsAdmin , */, deleteUser); //only admin
module.exports = router;
