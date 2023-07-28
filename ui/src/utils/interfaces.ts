  import {Dispatch, ChangeEvent, SetStateAction} from 'react'
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
    setUsers: Dispatch<SetStateAction<User[]>>;
  }

  export interface EditUserModalProps {
    id: string;
    user: User;
    open: boolean;
    onClose: () => void;
    setUsers: Dispatch<SetStateAction<User[]>>;
  }

  export interface CustomError extends Error{
    response: {
      data: {
        message: string;
      };
    };
  }

  export interface HeaderProps {
    handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
    setUsers: Dispatch<SetStateAction<User[]>>;
    searchQuery: string;
  }

  export interface UserListProps {
    users: User[];
    setUsers: Dispatch<SetStateAction<User[]>>;
  }

  export interface UserListItemProps {
    user: User;
    setUsers: Dispatch<SetStateAction<User[]>>;
  }
  
  
  
  
  
  
  
  