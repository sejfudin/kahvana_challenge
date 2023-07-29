import React, { useState } from "react";
import {
  Dialog,
  Box,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useStyles } from "./styles";
import { AddUserModalProps, User } from "../../utils/interfaces";
import { getAllUsers, saveUser } from "../../services/userService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initialState } from "../../utils/constants";

const AddUserModal: React.FC<AddUserModalProps> = ({
  open,
  onClose,
  setUsers,
  searchQuery,
}) => {
  const classes = useStyles();

  // User state
  const [user, setUser] = useState<User>(initialState);

  // Method that populate values for user from input fields
  const handleChange = (field: keyof User, value: string) => {
    setUser((prevUser) => ({ ...prevUser, [field]: value }));
  };

  //Save new user method
  const handleSave = async () => {
    try {
      await saveUser(user);
      const users = await getAllUsers(searchQuery);
      setUsers(users);
      setUser(initialState);
      onClose();
    } catch (error: any) {
      setUser(initialState);
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <Dialog open={open} onClose={onClose} classes={{ paper: classes.dialog }}>
      <div className={classes.dialogContent}>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <Box className={classes.inputBox}>
            <TextField
              fullWidth
              type="text"
              label="Name"
              value={user.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </Box>
          <Box className={classes.inputBox}>
            <TextField
              fullWidth
              type="email"
              label="Email"
              value={user.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </Box>
          <Box className={classes.inputBox}>
            <TextField
              fullWidth
              type="text"
              label="PhoneNumber"
              value={user.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
            />
          </Box>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button
            onClick={() => {
              onClose();
              setUser(initialState);
            }}
            color="secondary"
          >
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </div>
      <ToastContainer autoClose={3000} />
    </Dialog>
  );
};

export default AddUserModal;
