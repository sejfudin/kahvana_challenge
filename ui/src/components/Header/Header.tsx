import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/system/Box";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import { useStyles } from "./styles";
import { Container } from "@mui/material";
import AddUserModal from "../UserModal/AddUserModal";
import { HeaderProps } from "../../utils/interfaces";

const Header: React.FC<HeaderProps> = ({
  handleSearchChange,
  searchQuery,
  setUsers,
}) => {
  const classes = useStyles();

  // Open or close add user modal
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Method that open add user modal
  const handleAddUser = () => {
    setIsOpen(true);
  };

  return (
    <Container maxWidth="md">
      <AddUserModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        setUsers={setUsers}
        searchQuery={searchQuery}
      />
      <AppBar color="inherit" elevation={2}>
        <Toolbar>
          <Box>
            <InputBase
              placeholder="Search by name"
              inputProps={{ "aria-label": "search" }}
              name="name"
              value={searchQuery.name}
              onChange={handleSearchChange}
            />
          </Box>
          <Box>
            <InputBase
              placeholder="Search by email"
              inputProps={{ "aria-label": "search" }}
              name="email"
              value={searchQuery.email}
              onChange={handleSearchChange}
            />
          </Box>
          <Box>
            <InputBase
              placeholder="Search by phone"
              inputProps={{ "aria-label": "search" }}
              name="phoneNumber"
              value={searchQuery.phoneNumber}
              onChange={handleSearchChange}
            />
          </Box>

          <Box className={classes.root}>
            <Button variant="contained" color="primary" onClick={handleAddUser}>
              Add User
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
