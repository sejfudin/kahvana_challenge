import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { User } from '../utils/interfaces';

interface AddUserModalProps {
  onClose: () => void;
  onSave: (newUser: User) => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ onClose, onSave }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumbers, setPhoneNumbers] = useState<string>('');


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
    onSave({ name, email, phoneNumbers });
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Add New User</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          type="text"
          label="Name"
          value={name}
          onChange={handleNameChange}
        />
        <TextField
          fullWidth
          type="email"
          label="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          fullWidth
          type="text"
          label="PhoneNumbers"
          value={phoneNumbers}
          onChange={handlePhoneNumbersChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUserModal;

