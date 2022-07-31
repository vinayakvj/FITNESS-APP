const mongoose = require("mongoose");

const Connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database.");
  } catch {
    (err) => {
      console.log(err);
    };
  }
};

module.exports = Connectdb;
