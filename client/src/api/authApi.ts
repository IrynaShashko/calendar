import axiosInstance from "./axios";
import type { UserType } from "@shared/task.interface";

interface AuthResponse {
  user: Omit<UserType, "password">;
}

type RegisterData = Omit<UserType, "_id">;
type LoginCredentials = Pick<UserType, "email" | "password">;

export const registerUser = async (
  userData: RegisterData,
): Promise<{ message: string }> => {
  const response = await axiosInstance.post<{ message: string }>(
    "/auth/register",
    userData,
  );
  return response.data;
};

export const loginUser = async (
  credentials: LoginCredentials,
): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse>(
    "/auth/login",
    credentials,
  );
  return response.data;
};

export const logoutUser = async (): Promise<{ message: string }> => {
  const response = await axiosInstance.post<{ message: string }>(
    "/auth/logout",
  );
  return response.data;
};
