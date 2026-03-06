import { model, Schema } from "mongoose";

import { UserType } from "@shared/task.interface";

export interface UserDocument extends UserType, Document {
  _id: string; 
  password: string;
}

const userSchema = new Schema<UserDocument>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
});

export const UserModel = model<UserDocument>("User", userSchema);
