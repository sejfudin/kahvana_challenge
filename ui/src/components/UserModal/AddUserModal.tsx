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

const AddUserModal: React.FC<AddUserModalProps> = ({ open, onClose }) => {
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

  const handleSave = async () => {
    const newUser: User = {
      name,
      email,
      phoneNumbers,
    };
    await saveUser(newUser);
    const users = await getAllUsers();
    console.log(users);
    onClose();
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
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default AddUserModal;
