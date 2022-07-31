const express = require("express");

const router = express.Router();
const { createWorkout } = require("../controllers/workControl");

router.get("/", (req, res) => {
  res.status(200).json({ meg: "Workout section." });
});

router.post("/", createWorkout);

module.exports = router;
