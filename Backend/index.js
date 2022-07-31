const express = require("express");
require("dotenv").config();

const Connectdb = require("./config/db.js");

const workroutes = require("./routes/workouts.js");
const users = require("./routes/users.js");

Connectdb();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/fit/workouts", workroutes);
app.use("/fit/users", users);

app.listen(process.env.PORT, () => {
  console.log("Listening at port 3000");
});
