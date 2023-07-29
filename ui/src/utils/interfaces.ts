import { Dispatch, ChangeEvent, SetStateAction } from "react";
export interface User {
  _id?: string;
  id?: number;
  name: string;
  email: string;
  phoneNumber: string;
}

export interface SearchQuery {
  name?: string;
  email?: string;
  phoneNumber?: string;
}

export interface UserPaginationProps {
  count: number;
  page: number;
  style?: React.CSSProperties;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export interface AddUserModalProps {
  open: boolean;
  searchQuery: SearchQuery;
  onClose: () => void;
  setUsers: (users: User[]) => void;
}

export interface EditUserModalProps {
  id: string;
  user: User;
  open: boolean;
  searchQuery: SearchQuery;
  onClose: () => void;
  setUsers: Dispatch<SetStateAction<User[]>>;
}

export interface CustomError {
  message: string;
  status?: number;
}

export interface HeaderProps {
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  setUsers: Dispatch<SetStateAction<User[]>>;
  searchQuery: SearchQuery;
}

export interface UserListProps {
  users: User[];
  searchQuery: SearchQuery;
  setUsers: Dispatch<SetStateAction<User[]>>;
}

export interface UserListItemProps {
  user: User;
  searchQuery: SearchQuery;
  setUsers: Dispatch<SetStateAction<User[]>>;
}
