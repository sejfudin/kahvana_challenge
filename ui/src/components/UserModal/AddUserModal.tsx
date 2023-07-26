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
import { User } from "../../utils/interfaces";
import axios from "axios";

interface AddUserModalProps {
  open: boolean;
  onClose: () => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ open, onClose }) => {
  const classes = useStyles();

  const [formData, setFormData] = useState<User>({
    name: "",
    email: "",
    phoneNumbers: "",
  });

  useEffect(() => {
    if (open) {
      // Only reset the form data when the modal is opened
      if (!formData.name && !formData.email && !formData.phoneNumbers) {
        setFormData({
          name: "",
          email: "",
          phoneNumbers: "",
        });
      }
    }
  }, [open]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      
      ...prevFormData,
      [name]: value,
    }));
  };

  const saveUser =async (newUser:User)=> {
    try {
      await axios.post<User>("http://localhost:5000/users/", newUser)
    } catch (error) {
      console.log(error)
    }
    

  }

  const handleSave = () => {
    saveUser(formData)
    onClose(); // Close the modal after saving
  };

  const handleClose = () => {
    onClose(); // Close the modal if "Cancel" button is clicked
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      classes={{ paper: classes.dialog }}
    >
      <div className={classes.dialogContent}>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <Box className={classes.inputBox}>
            <TextField
              fullWidth
              type="text"
              label="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Box>
          <Box className={classes.inputBox}>
            <TextField
              fullWidth
              type="email"
              label="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Box>
          <Box className={classes.inputBox}>
            <TextField
              fullWidth
              type="text"
              label="PhoneNumbers"
              value={formData.phoneNumbers}
              onChange={handleInputChange}
            />
          </Box>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button onClick={handleClose} color="secondary">
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
