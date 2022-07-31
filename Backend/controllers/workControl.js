const express = require("express");

const Workout = require("../models/workmodel");

// create workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = Workout.create({ title, reps, load }).then(() => {
      res.json({ msg: "data created" });
    });
  } catch {
    res.status(404).json({ msg: "data not entered." });
  }
};

module.exports = { createWorkout };
