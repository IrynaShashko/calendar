import api from "./axios";
import type { TaskType } from "@shared/task.interface";

const TASKS_URL = "/tasks";

export const getTasks = async (): Promise<TaskType[]> => {
  const response = await api.get(TASKS_URL);
  return response.data;
};

export const createTask = async (task: {
  title: string;
  date: Date;
  labels: string[];
}) => {
  const response = await api.post(TASKS_URL, task);
  return response.data;
};

export const updateTask = async (
  id: string,
  update: {
    title?: string;
    labels?: string[];
    date?: Date;
    order?: number;
  },
) => {
  const response = await api.patch(`${TASKS_URL}/${id}`, update);
  return response.data;
};

export const deleteTask = async (id: string) => {
  await api.delete(`${TASKS_URL}/${id}`);
};
