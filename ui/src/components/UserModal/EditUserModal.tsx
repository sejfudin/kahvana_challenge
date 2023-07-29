import React, { useState } from "react";
import { Dialog, Box } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { EditUserModalProps, User } from "../../utils/interfaces";
import { useStyles } from "./styles";
import { getAllUsers, updateUser } from "../../services/userService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditUserModal: React.FC<EditUserModalProps> = ({
  user,
  open,
  onClose,
  id,
  setUsers,
  searchQuery,
}) => {
  const classes = useStyles();

  // Edited user state
  const [editedUser, setEditedUser] = useState<User>(user);

  // Method that updates changed values for user
  const handleChange = (field: keyof User, value: string) => {
    setEditedUser((prevUser) => ({ ...prevUser, [field]: value }));
  };

  //Save method
  const handleSave = async () => {
    try {
      await updateUser(id, editedUser);
      const users = await getAllUsers(searchQuery);
      setUsers(users);
      onClose();
    } catch (error: any) {
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
              value={editedUser.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </Box>
          <Box className={classes.inputBox}>
            <TextField
              fullWidth
              type="email"
              label="Email"
              value={editedUser.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </Box>
          <Box className={classes.inputBox}>
            <TextField
              fullWidth
              type="text"
              label="PhoneNumber"
              value={editedUser.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
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
      <ToastContainer autoClose={3000} />
    </Dialog>
  );
};

export default EditUserModal;
