export interface PhoneNumber {
    type: string;
    value: string;
  }

  export interface User {
    email: string;
    phoneNumbers: PhoneNumber[];
    name?: string;
  }