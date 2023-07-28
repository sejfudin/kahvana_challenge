import { BASE_URL } from "../utils/constants";
import { CustomError, User } from "../utils/interfaces";
import axios from "axios";

export const getAllUsers = async (
  query?: string,
  email?: string,
  phoneNumber?: string
) => {
  try {
    const queryParams = new URLSearchParams();

    if (query) {
      queryParams.append("query", query);
    }

    if (email) {
      queryParams.append("email", email);
    }

    if (phoneNumber) {
      queryParams.append("phoneNumber", phoneNumber);
    }

    const queryString = queryParams.toString();
    const { data } = await axios.get<User[]>(
      `${BASE_URL}?${queryString}`
    );
    return data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const saveUser = async (newUser: User) => {
  try {
    const { data } = await axios.post<User>(BASE_URL, newUser);
    return data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const updateUser = async (id: string, newData: User) => {
  try {
    const { data } = await axios.put<User>(
      `${BASE_URL}${id}`,
      newData
    );
    return data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export const deleteUser = async (id: string) => {
  try {
    const { data } = await axios.delete<Boolean>(
      `${BASE_URL}${id}`
    );
    return data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
