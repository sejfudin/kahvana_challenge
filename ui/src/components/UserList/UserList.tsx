import React, { useEffect, useState } from "react";
import { List, Pagination, Typography } from "@mui/material";
import { useStyles } from "./styles";
import UserListItem from "./UserListItem";
import { getAllUsers } from "../../services/userService";
import {ITEMS_PER_PAGE} from '../../utils/constants';
import { User } from "../../utils/interfaces";

interface UserListProps {
  onEditUser: (userId: string) => void;
}

const UserList = ({ onEditUser }: UserListProps) => {
  const classes = useStyles();

  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end indexes of the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Get the users for the current page
  const usersForCurrentPage = users.slice(startIndex, endIndex);
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        if (data) {
          setUsers(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);
console.log(usersForCurrentPage)
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
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}
      >
        <Pagination
          count={Math.ceil(users.length / ITEMS_PER_PAGE)} // Calculate total number of pages
          page={currentPage}
          onChange={handlePageChange}
          style={{ marginTop: "16px" }}
        />
      </div>
    </div>
  );
};

export default UserList;
