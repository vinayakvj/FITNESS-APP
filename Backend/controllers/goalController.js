const Goal = require("../models/goalModel");

// GET
const getGoal = (req, res) => {
  /* const goal = new Goal({ text: "jjsjsjsjss" });
  goal.save().then((res) => {
    console.log("Data entered."); 
  });*/

  Goal.find()
    .then((ress) => {
      res.send(ress);
    })
    .catch((err) => {
      console.log(err);
    });
};

// POST
const setGoal = async (req, res) => {
  console.log(req.body);
  res.status(200).json({ goal: "goal is set" });
  const data = new Goal({ text: "Sreyas" });
  data.save();
};

//PUT
const postGoal = async (req, res) => {
  /* res.status(200).json({ goal: "goal is post" }); */

  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(400).json({ Message: `updated goal ${req.params.id}` });
};

//DELETE
const deleteGoal = async (req, res) => {
  /* res.status(200).json({ goal: "goal is deleted" }); */

  const goal = await Goal.findById(req.params.id);

  await goal.remove();

  res.status(200).json({ message: `data deleted of id: ${req.params.id}` });
};

module.exports = {
  getGoal,
  setGoal,
  postGoal,
  deleteGoal,
};
