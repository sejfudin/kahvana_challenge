import { User } from "../utils/interfaces";
import axios from "axios";

export const getAllUsers = async () => {
  try {
    const { data } = await axios.get<User[]>("http://localhost:4000/users/");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const saveUser = async (newUser: User) => {
  try {
    const { data } = await axios.post<User>("http://localhost:4000/users/", newUser);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const updateUser = async (id:string, newData: User) => {
  try {
    const { data } = await axios.put<User>(`http://localhost:4000/users/${id}`, newData);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const deleteUser = async (id:string) => {
  try {
    const { data } = await axios.delete<Boolean>(`http://localhost:4000/users/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
