const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// Variable to be sent to Frontend with Database status
let databaseConnection = "Waiting for Database response...";
router.get("/", function (req, res, next) {
  res.send(databaseConnection);
});

// Connecting to MongoDB
const dbURI =
  "mongodb+srv://dixyaAchh:Dimbus.77@mycluster.eep8c.mongodb.net/todo?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("connected to db"))
  .catch((err) => console.log(err)); // If there is a connnection error send an error message

mongoose.connection.on("error", (error) => {
  console.log("Database connection error:", error);
  databaseConnection = "Error connecting to Database";
});

// If connected to MongoDB send a success message
mongoose.connection.once("open", () => {
  console.log("Connected to Database!");
  databaseConnection = "Connected to Database";
});

module.exports = router;

//use this with docker container
//const dbURI = "mongodb://localhost:27017/todo";
