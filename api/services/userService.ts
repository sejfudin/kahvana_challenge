import { UserModel } from "../models/userModel";
import { User } from "../utils/interfaces";

//Add user
const addUser = async (data: User): Promise<User | null> => {
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
const getUser = async (id: string): Promise<User> => {
  const user: User | null = await UserModel.findById(id);
  if (user) {
    return user;
  } else {
    throw new Error("User not found");
  }
};

//Update user
const updateUser = async (id: string, data: Partial<User>): Promise<User> => {
  const { name, email, phoneNumbers } = data;

  const user: User | null = await UserModel.findByIdAndUpdate(id, {
    name,
    email,
    phoneNumbers,
  });
  if (user) {
    return user;
  } else {
    throw new Error("User not found");
  }
};

//Delete user
const deleteUser = async (id: string): Promise<User> => {
  const user: User | null = await UserModel.findByIdAndRemove(id);
  if (user) {
    return user;
  } else {
    throw new Error("User not found");
  }
};

export const userService = {
  addUser: addUser,
  getUser: getUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
