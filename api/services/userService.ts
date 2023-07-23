import { UserModel } from "../models/userModel";
import { User } from "../utils/interfaces";

//Add user
const addUser = async (data: any) => {
  const { name, email, phoneNumbers } = data;

  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    throw new Error("User already exist");
  }

  const newUser = await UserModel.create({
    name,
    email,
    phoneNumbers,
  });

  return await UserModel.findOne({ _id: newUser._id });
};

//Get user by id
const getUser = async (id: any) => {
  const user = await UserModel.findById(id);
  if (user) {
    return user;
  } else {
    throw new Error("User not found");
  }
};

export const userService = {
  addUser: addUser,
  getUser: getUser,
};
