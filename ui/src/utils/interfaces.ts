  export interface User {
    _id?: string;
  id?: number;
  name: string;
  email: string;
  phoneNumbers: string;
  }

  export interface UserPaginationProps {
    count: number;
    page: number;
    style?: React.CSSProperties;
    onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  }

  export interface FormData {
    name: string;
    email: string;
    phoneNumbers: string;
  }
  
  
  
  
  
  
  
  