const jwt = require("jsonwebtoken");
/* const bcrypt = require("bcryptjs"); */
const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");

// register a user.
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields.");
  }

  const userExists = await User.findOne({ email: email });

  if (!userExists) {
    res.status(400).json({ message: "User Already exists." });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const userCreate = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (userCreate) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400).json({ message: "User not entered into database." });
  }

  res.status(200).json({
    message: "user Registration.",
  });
});

// authenticate a user
// login
//POST
const LoginUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "User Logined.",
  });
});

// get user data
// GET
const getUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "got User.",
  });
});

module.exports = { registerUser, LoginUser, getUser };
