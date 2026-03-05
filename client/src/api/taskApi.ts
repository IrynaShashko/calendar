import axios from "axios";

const API_URL = "/api/tasks";

export const getTasks = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

export const createTask = async (task: { title: string; date: Date; labels: string[] }) => {
  const response = await axios.post("/api/tasks", task);
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
  const response = await axios.patch(`/api/tasks/${id}`, update);
  return response.data;
};

export const deleteTask = async (id: string) => {
  await axios.delete(`/api/tasks/${id}`);
};
