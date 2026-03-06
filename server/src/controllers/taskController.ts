import { Request, Response } from "express";

import { TaskModel } from "../models/Task.js";

interface AuthRequest<
  P = {},
  ResBody = any,
  ReqBody = any,
  ReqQuery = any,
> extends Request<P, ResBody, ReqBody, ReqQuery> {
  user?: {
    userId: string;
  };
}

interface TaskBody {
  title?: string;
  date?: string;
  labels?: string[];
  order?: number;
}

interface TaskParams {
  id: string;
}

interface GetAllTasksQuery {
  year?: string;
  month?: string;
}

export const getAllTasks = async (
  req: AuthRequest<{}, {}, {}, GetAllTasksQuery>,
  res: Response,
) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { year, month } = req.query;
    let query: any = { userId: userId };

    if (year && month) {
      const yearNum = Number(year);
      const monthNum = Number(month);

      const startDate = new Date(yearNum, monthNum - 1, 1);
      const endDate = new Date(yearNum, monthNum, 0, 23, 59, 59);

      query.date = {
        $gte: startDate,
        $lte: endDate,
      };
    }

    const tasks = await TaskModel.find(query).sort({ order: 1 });
    res.json(tasks);
  } catch (err) {
    console.error("Error fetching tasks:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

export const createTask = async (
  req: AuthRequest<{}, {}, TaskBody>,
  res: Response,
) => {
  try {
    const userId = req.user?.userId;
    console.info('req.user?.id:', userId);
    console.info('req', req.body);
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { title, date, labels } = req.body;

    const newTask = new TaskModel({
      title,
      date,
      labels,
      userId: userId,
    });

    await newTask.save();

    console.log("Task saved to MongoDB:", title);
    res.status(201).json(newTask);
  } catch (err) {
    console.error("Database Error:", err);
    res.status(500).json({ message: "Error saving task" });
  }
};

export const deleteTask = async (
  req: AuthRequest<TaskParams>,
  res: Response,
) => {
  try {
    const userId = req.user?.userId;

    const task = await TaskModel.findOneAndDelete({
      _id: req.params.id,
      userId: userId,
    });

    if (!task) {
      return res
        .status(404)
        .json({ message: "Task not found or access denied" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    console.error("Error deleting task:", err);
    res.status(500).json({ message: "Error deleting task" });
  }
};

export const updateTask = async (
  req: AuthRequest<TaskParams, {}, TaskBody>,
  res: Response,
) => {
  try {
    const userId = req.user?.userId;
    const { title, labels, date, order } = req.body;

    const updatedTask = await TaskModel.findOneAndUpdate(
      { _id: req.params.id, userId: userId },
      { title, labels, date, order },
      { new: true },
    );

    if (!updatedTask) {
      return res
        .status(404)
        .json({ message: "Task not found or access denied" });
    }

    res.json(updatedTask);
  } catch (err) {
    console.error("Error updating task:", err);
    res.status(500).json({ message: "Error updating task" });
  }
};
