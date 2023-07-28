export interface PhoneNumber {
  type: string;
  value: string;
}

export interface User {
  email: string;
  phoneNumbers: PhoneNumber[];
  name?: string;
}

export interface CustomError extends Error {
  status?: number;
  message: string;
}
