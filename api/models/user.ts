import { Schema, model } from "mongoose";
import { User } from "../utils/interfaces";

const userSchema = new Schema<User>({
    email: { type: String, required: true },
    phoneNumbers: [Schema.Types.Mixed],
    name: String,
  });
  
  export const UserModel = model<User>('User', userSchema);