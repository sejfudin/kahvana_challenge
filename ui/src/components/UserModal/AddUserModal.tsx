import React, { useState, useEffect } from "react";
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

const AddUserModal: React.FC<AddUserModalProps> = ({
  open,
  onClose,
  setUsers,
}) => {
  const classes = useStyles();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumbers, setPhoneNumbers] = useState<string>("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumbersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumbers(e.target.value);
  };

  const clearFields = () => {
    setName("");
    setEmail("");
    setPhoneNumbers("");
  };

  const handleSave = async () => {
    try {
      const newUser: User = {
        name,
        email,
        phoneNumbers,
      };
      await saveUser(newUser);
      const users = await getAllUsers();
      setUsers(users);
      clearFields();
      onClose();
    } catch (error: any) {
      clearFields();
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
              value={name}
              onChange={handleNameChange}
            />
          </Box>
          <Box className={classes.inputBox}>
            <TextField
              fullWidth
              type="email"
              label="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </Box>
          <Box className={classes.inputBox}>
            <TextField
              fullWidth
              type="text"
              label="PhoneNumbers"
              value={phoneNumbers}
              onChange={handlePhoneNumbersChange}
            />
          </Box>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button
            onClick={() => {
              onClose();
              clearFields();
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
