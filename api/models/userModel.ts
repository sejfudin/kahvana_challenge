import { Schema, model } from "mongoose";
import { User } from "../utils/interfaces";

const userSchema = new Schema<User>({
  email: { type: String, required: true },
  name: { type: String, required: true },
  phoneNumber: String,
});

export const UserModel = model<User>("User", userSchema);
