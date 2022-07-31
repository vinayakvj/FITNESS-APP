const express = require("express");

const {
  registerUser,
  LoginUser,
  getUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/", registerUser);
router.post("/login", LoginUser);
router.get("/me", getUser);

module.exports = router;
