import { Schema, model } from "mongoose";
import { User } from "../utils/interfaces";

const userSchema = new Schema<User>({
  email: { type: String, required: true },
  phoneNumbers: String,
  name: String,
});

export const UserModel = model<User>("User", userSchema);
