import { UserModel } from "../models/userModel";
import { User, UserQueryParams } from "../utils/interfaces";
import { emailFormat, phoneFormat } from "../utils/constants";

// Add user
const addUser = async (data: User): Promise<User | null> => {
  const { name, email, phoneNumber } = data;
  if (!name) {
    throw new Error("Name is required field!");
  }
  if (!email) {
    throw new Error("Email is required field!");
  }

  if (!emailFormat.test(email)) {
    throw new Error("Invalid email format!");
  }

  if (phoneNumber && !phoneFormat.test(phoneNumber)) {
    throw new Error("Phone number must be in the format xxx-xxx-xxx!");
  }

  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    throw new Error("User already exist!");
  }

  const newUser = await UserModel.create({
    name,
    email,
    phoneNumber,
  });

  return await UserModel.findOne({ _id: newUser._id });
};

// Get user by id
const getUser = async (id: string): Promise<User> => {
  const user: User | null = await UserModel.findById(id);
  if (user) {
    return user;
  } else {
    throw new Error("User not found!");
  }
};

// Get all users
const getUsers = async (params?: UserQueryParams): Promise<User[]> => {
  const { name, email, phoneNumber } = params || {};
  const queryConditions: any = {}; // Use 'any' here because the structure will vary based on the provided parameters

  if (name && name.trim() !== "") {
    queryConditions.name = { $regex: `^${name}`, $options: "i" };
  }

  if (email && email.trim() !== "") {
    queryConditions.email = { $regex: `^${email}`, $options: "i" };
  }

  if (phoneNumber && phoneNumber.trim() !== "") {
    queryConditions.phoneNumber = {
      $regex: `^${phoneNumber}`,
      $options: "i",
    };
  }

  try {
    const users: User[] = await UserModel.find(queryConditions);
    return users;
  } catch (error: any) {
    throw new Error("Error while fetching users: " + error.message);
  }
};

// Update user
const updateUser = async (id: string, data: Partial<User>): Promise<User> => {
  const { name, email, phoneNumber } = data;

  if (!name) {
    throw new Error("Name is required field!");
  }
  if (!email) {
    throw new Error("Email is required field!");
  }

  const user: User | null = await UserModel.findByIdAndUpdate(id, {
    name,
    email,
    phoneNumber,
  });
  if (user) {
    return user;
  } else {
    throw new Error("User not found");
  }
};

// Delete user
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
  getUsers: getUsers,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
