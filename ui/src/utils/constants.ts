import { User } from "./interfaces";

export const ITEMS_PER_PAGE = 5; // Number of items to show per page

export const BASE_URL =
  process.env.REACT_APP_BASE_URL || "http://localhost:5000/users/"; // Base url on backend

export const initialState: User = { name: "", email: "", phoneNumber: "" }; // Initial state for user
