const Task = require("../models/task.model");
const express = require("express");
const router = express.Router();

/*
router.get("/todoapi", async (req, res) => {
  res.json({ message: "Welcome to the to-do app!" });
});
*/

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const task = await new Task(req.body).save();
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const task = Task.findByIdAndDelete(req.params.id);
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

/*  
app.get("/api/add-task", (req, res) => {
    const task = new Task({
      name: "Renew License",
      completed: "false",
      date: Date.now(),
    });
    task
      .save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  */
