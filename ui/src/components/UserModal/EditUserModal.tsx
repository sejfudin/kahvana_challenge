import React, { useState, useEffect } from 'react';
import {Dialog, Box} from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { User } from '../../utils/interfaces';
import { useStyles } from "./styles"; 

interface EditUserModalProps {
  user: User;
  open: boolean;
  onClose: () => void;
  // onSave: (updatedUser: User) => void;
}

const EditUserModal: React.FC<EditUserModalProps> = ({ user, open, onClose }) => {
  const classes = useStyles();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumbers, setPhoneNumbers] = useState<string>('');


  useEffect(() => {
    setName(user.name || '');
      setEmail(user.email || '');
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

  const handleSave = () => {
    // onSave({ ...user, name, email });
    onClose();
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

export default EditUserModal;
