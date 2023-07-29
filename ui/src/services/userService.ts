import { BASE_URL } from "../utils/constants";
import { SearchQuery, User } from "../utils/interfaces";
import axios from "axios";

// Get all users or search users by name, email or phone numbers
export const getAllUsers = async (query: SearchQuery) => {
  try {
    const queryParams = new URLSearchParams();

    if (query.name) {
      queryParams.append("name", query.name);
    }

    if (query.email) {
      queryParams.append("email", query.email);
    }

    if (query.phoneNumber) {
      queryParams.append("phoneNumber", query.phoneNumber);
    }

    const queryString = queryParams.toString();

    const { data } = await axios.get<User[]>(`${BASE_URL}?${queryString}`);
    return data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

//Save user
export const saveUser = async (newUser: User) => {
  try {
    const { data } = await axios.post<User>(BASE_URL, newUser);
    return data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

// Update user
export const updateUser = async (id: string, newData: User) => {
  try {
    const { data } = await axios.put<User>(`${BASE_URL}${id}`, newData);
    return data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

// Delete user
export const deleteUser = async (id: string) => {
  try {
    const { data } = await axios.delete<Boolean>(`${BASE_URL}${id}`);
    return data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
