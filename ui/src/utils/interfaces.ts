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

  export interface AddUserModalProps {
    open: boolean;
    onClose: () => void;
  }

  export interface EditUserModalProps {
    id: string;
    user: User;
    open: boolean;
    onClose: () => void;
  }
  
  
  
  
  
  
  
  