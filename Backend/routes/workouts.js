const express = require("express");

const router = express.Router();
const {
  createWorkout,
  getAllWorkouts,
  singleWorkout,
} = require("../controllers/workControl");

router.get("/", (req, res) => {
  res.status(200).json({ meg: "Workout section." });
});

router.post("/", createWorkout);

router.get("/getall", getAllWorkouts);

router.get("/:id", singleWorkout);

module.exports = router;
