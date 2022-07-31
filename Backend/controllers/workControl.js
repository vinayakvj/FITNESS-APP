const express = require("express");
const { default: mongoose } = require("mongoose");

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

// delete from workout database.
const delwork = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout." });
  }

  const deletedwork = await Workout.findByIdAndDelete({ _id: id });

  if (!deletedwork) {
    res.json({ msg: "error in deleting." });
  } else {
    res.json(deletedwork);
  }
};

// update a current workout
const upWork = async (req, res) => {
  const { id } = req.params;

  const updatedWork = await Workout.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!updatedWork) {
    res.status(400).json({ msg: "not updated." });
  } else {
    res.status(200).json(updatedWork);
  }
};

module.exports = {
  createWorkout,
  getAllWorkouts,
  singleWorkout,
  delwork,
  upWork,
};
