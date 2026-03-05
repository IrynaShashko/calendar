import express from "express";
import { TaskModel } from "../models/Task.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { year, month } = req.query;

    let query = {};
    if (year && month) {
      const startDate = new Date(Number(year), Number(month) - 1, 1);
      const endDate = new Date(Number(year), Number(month), 0, 23, 59, 59);

      query = {
        date: {
          $gte: startDate,
          $lte: endDate,
        },
      };
    }

    const tasks = await TaskModel.find(query);

    res.json(tasks);
  } catch (err) {
    console.error("Error fetching tasks:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, date, labels } = req.body;

    const newTask = new TaskModel({ title, date, labels });
    await newTask.save();

    console.log("✅ Task saved to MongoDB with labels:", title);
    res.status(201).json(newTask);
  } catch (err) {
    console.error("❌ Database Error:", err);
    res.status(500).json({ message: "Error saving task" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await TaskModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    console.error("Error deleting task:", err);
    res.status(500).json({ message: "Error deleting task" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { title, labels, date, order } = req.body;

    const updatedTask = await TaskModel.findByIdAndUpdate(
      req.params.id,
      { title, labels, date, order },
      { new: true },
    );
    res.json(updatedTask);
  } catch (err) {
    console.error("Error updating task:", err);
    res.status(500).json({ message: "Error updating task" });
  }
});

export default router;
