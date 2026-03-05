import { Schema, model } from "mongoose";
import type { TaskType } from "@shared/task.interface";

const taskSchema = new Schema<TaskType>({
  title: { type: String, required: true },
  date: { type: String, required: true }, 
  order: { type: Number, default: 0 },
  labels: { type: [String], default: [] },
});

export const TaskModel = model<TaskType>("Task", taskSchema);
