import React, { useState } from "react";
import { List, Pagination, Typography } from "@mui/material";
import { useStyles } from "./styles";
import UserListItem from "./UserListItem";
import { ITEMS_PER_PAGE } from "../../utils/constants";
import { UserListProps } from "../../utils/interfaces";

const UserList: React.FC<UserListProps> = ({ users, setUsers }) => {
  const classes = useStyles();

  // const [users, setUsers] = useState<User[]>([]);
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

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        List of Users
      </Typography>
      {users.length > 0 ? (
        <>
          <List component="ul">
            {usersForCurrentPage.map((user) => (
              <UserListItem key={user._id} user={user} setUsers={setUsers} />
            ))}
          </List>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "16px",
            }}
          >
            <Pagination
              count={Math.ceil(users.length / ITEMS_PER_PAGE)} // Calculate total number of pages
              page={currentPage}
              onChange={handlePageChange}
              style={{ marginTop: "16px" }}
            />
          </div>
        </>
      ) : (
        <p>No users found!</p>
      )}
    </div>
  );
};

export default UserList;
