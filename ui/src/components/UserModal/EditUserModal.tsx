import React, { useState, useEffect } from "react";
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
}) => {
  const classes = useStyles();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumbers, setPhoneNumbers] = useState<string>("");

  useEffect(() => {
    setName(user.name || "");
    setEmail(user.email || "");
  }, [user]);

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
    try {
      const newData: User = {
        name,
        email,
        phoneNumbers,
      };
      await updateUser(id, newData);
      const users = await getAllUsers();
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
      <ToastContainer autoClose={3000} />
    </Dialog>
  );
};

export default EditUserModal;
