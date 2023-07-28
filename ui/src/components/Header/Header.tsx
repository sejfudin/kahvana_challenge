import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/system/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";

import { useStyles } from "./styles";
import { Container } from "@mui/material";
import AddUserModal from "../UserModal/AddUserModal";

const Header = () => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  const handleAddUser = () => {
    setIsOpen(true);
  };

  return (
    <Container maxWidth="md">
      <AddUserModal open={isOpen}
       onClose={()=>setIsOpen(false)}
      />
      <AppBar color="inherit" elevation={2}>
        <Toolbar>
          <Box>
            <InputBase
              placeholder="Search users..."
              inputProps={{ "aria-label": "search" }}
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
