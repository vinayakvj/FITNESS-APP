const express = require("express");

const Workout = require("../models/workmodel");
const { all } = require("../routes/workouts");

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

// retrive all the workouts.

const getAllWorkouts = async (req, res) => {
  const allworkouts = await Workout.find({});

  if (!allworkouts) {
    res.json({ msg: "error in retiriving." });
  } else {
    res.json(allworkouts);
  }
};

// to retrive a single workout.
const singleWorkout = async (req, res) => {
  const id = req.params.id;
  const single = await Workout.findById(id);

  if (!single) {
    res.json({ msg: "error in retiriving." });
  } else {
    res.json(single);
  }
};

module.exports = { createWorkout, getAllWorkouts, singleWorkout };
