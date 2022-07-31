const express = require("express");

const router = express.Router();
const {
  createWorkout,
  getAllWorkouts,
  singleWorkout,
  delwork,
  upWork,
} = require("../controllers/workControl");

router.get("/", (req, res) => {
  res.status(200).json({ meg: "Workout section." });
});

// enter data from the database
router.post("/", createWorkout);

//get data from the database
router.get("/getall", getAllWorkouts);

//get a particualr workout from the database
router.get("/:id", singleWorkout);

//delete a workout from the database
router.delete("/:id", delwork);

// update a workout
router.patch("/:id", upWork);

module.exports = router;
