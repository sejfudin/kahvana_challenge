import React, { useEffect, useState } from "react";
import axios from "axios";
import { List, ListItem, ListItemText, Pagination, Typography } from "@mui/material";
import { Button } from "@mui/base";
import { useStyles } from './styles';
import UserListItem from "./UserListItem";

interface User {
  _id: string;
  id: number;
  name: string;
  email: string;
  phoneNumbers: string;
}
interface UserListProps {
  onEditUser: (userId: string) => void;
}
const ITEMS_PER_PAGE = 6; // Number of items to show per page

const UserList = ({onEditUser}: UserListProps) => {
  const classes = useStyles();
  const [users, setUsers] = useState<User[]>([]);
  
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  // Calculate the start and end indexes of the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Get the users for the current page
  const usersForCurrentPage = users.slice(startIndex, endIndex);

  const getAllUsers = async () => {
    try {
      const {data} = await axios.get<User[]>("http://localhost:5000/users/");
    setUsers(data)
    } catch (error) {
      console.log(error)
    }
    
  };

  useEffect(() => {
    getAllUsers();
  }, []);



  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        List of Users
      </Typography>
      <List component="ul">
        {usersForCurrentPage.map((user) => (
          <UserListItem key={user._id} user={user} onEditUser={onEditUser} />
        ))}
      </List>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
      <Pagination
        count={Math.ceil(users.length / ITEMS_PER_PAGE)} // Calculate total number of pages
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        style={{ marginTop: "16px" }}
      />
      </div>
    </div>
  );
};

export default UserList;
