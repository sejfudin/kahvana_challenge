import { Request, Response, NextFunction } from "express";
import { UserQueryParams, userService } from "../services/userService";
import { User } from "../utils/interfaces";

//Add user
export const addUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, name, phoneNumbers } = req.body;
  const data: User = {
    name,
    email,
    phoneNumbers,
  };

  try {
    const createdUser: User | null = await userService.addUser(data);
    res.send(createdUser);
  } catch (error: any) {
    next({ message: error.message });
  }
};

//Get all users
export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Extract query parameters from req.query object
    const { query, email, phoneNumber }: UserQueryParams = req.query;

    const users = await userService.getUsers({ query, email, phoneNumber });
    res.send(users);
  } catch (error: any) {
    next({ status: error.status, message: error.message });
  }
};

//Get user
export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const user = await userService.getUser(id);
    res.send(user);
  } catch (error: any) {
    next({ status: error.status, message: error.message });
  }
};

//Update user
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const data = {
    name: req.body.name,
    email: req.body.email,
    phoneNumbers: req.body.phoneNumbers,
  };

  try {
    const user = await userService.updateUser(id, data);
    res.send(user);
  } catch (error: any) {
    next({ status: error.status, message: error.message });
  }
};

//Delete user
export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const user = await userService.deleteUser(id);
    res.send(true);
  } catch (error: any) {
    res.send(false);
  }
};
