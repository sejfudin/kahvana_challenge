export interface User {
  email: string;
  name: string;
  phoneNumber?: string;
}

interface PhoneNumber {
  type: string;
  value: string;
}

export interface User {
  email: string;
  name: string;
}

export interface UserWithPhoneAsArray {
  email: string;
  phoneNumbers: PhoneNumber[];
}

export interface CombinedUser extends User {
  phoneNumber: string;
}


export interface UserQueryParams {
  name?: string;
  email?: string;
  phoneNumber?: string;
}
