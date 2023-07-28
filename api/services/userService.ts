import { UserModel } from "../models/userModel";
import { User } from "../utils/interfaces";

//Add user
const addUser = async (data: User): Promise<User | null> => {
  const { name, email, phoneNumbers } = data;
  if (!name) {
    throw new Error("Name is required field!");
  }
  if (!email) {
    throw new Error("Email is required field!");
  }

  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    throw new Error("User already exist!");
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
    throw new Error("User not found!");
  }
};
export interface UserQueryParams {
  query?: string;
  email?: string;
  phoneNumber?: string;
}
//Get all users
const getUsers = async (params?: UserQueryParams): Promise<User[]> => {
  const { query, email, phoneNumber } = params || {};
  let queryConditions = {};

  if (query) {
    // Apply the query parameter to filter users based on your requirements
    // For example, you might want to filter by name, role, etc.
    // Modify the following line as needed based on your user model structure.
    queryConditions = {
      ...queryConditions,
      name: { $regex: query, $options: "i" },
    };
  }

  if (email) {
    queryConditions = { ...queryConditions, email };
  }

  if (phoneNumber) {
    queryConditions = { ...queryConditions, phoneNumber };
  }
  const users: User[] = await UserModel.find(queryConditions);
  if (users.length > 0) {
    return users;
  } else {
    throw new Error("No users found!");
  }
};

//Update user
const updateUser = async (id: string, data: Partial<User>): Promise<User> => {
  const { name, email, phoneNumbers } = data;

  if (!name) {
    throw new Error("Name is required field!");
  }
  if (!email) {
    throw new Error("Email is required field!");
  }

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
  getUsers: getUsers,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
