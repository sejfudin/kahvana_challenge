import { Request, Response } from "express";
import { userService } from "../services/userService";

//Add user
export const addUser = async (req: Request, res: Response) => {
  const { email, name, phoneNumbers } = req.body;
  const data = {
    name,
    email,
    phoneNumbers,
  };

  try {
    const createdUser = await userService.addUser(data);
    res.send(createdUser);
  } catch (error) {}
};

//Get user
export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await userService.getUser(id);
    res.send(user);
  } catch (error) {}
};

//Update user
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = {
    name: req.body.name,
    email: req.body.email,
    phoneNumbers: req.body.phoneNumbers,
  };

  try {
    const user = await userService.updateUser(id, data);
    res.send(user);
  } catch (error) {}
};

//Delete user
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await userService.deleteUser(id);
    res.send(user);
  } catch (error) {}
};
