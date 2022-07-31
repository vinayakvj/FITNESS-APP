const express = require("express");
const {
  getGoal,
  postGoal,
  deleteGoal,
  setGoal,
} = require("../controllers/goalController");

const router = express.Router();

router.route("/").get(getGoal).post(setGoal);
router.route("/:id").put(postGoal).delete(deleteGoal);

module.exports = router;
