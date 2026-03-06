import { Schema, Types, model } from "mongoose";

import type { TaskType } from "@shared/task.interface";

interface TaskDocument extends Omit<TaskType, "userId">, Document {
  userId: Types.ObjectId;
}

const taskSchema = new Schema<TaskDocument>({
  title: { type: String, required: true },
  date: { type: String, required: true },
  order: { type: Number, default: 0 },
  labels: { type: [String], default: [] },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const TaskModel = model<TaskDocument>("Task", taskSchema);
