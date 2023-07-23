import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/system/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';

import { useStyles } from './styles';

const Header = () => {
  const classes = useStyles();

  const handleAddUser = () => {
    // Implement the logic for adding a new user here
    console.log('Adding a new user...');
  };

  return (
    <AppBar color='inherit' elevation={2}>
      <Toolbar>
        <Box>
          <InputBase
            placeholder="Search users..."
            
            inputProps={{ 'aria-label': 'search' }}
          />
        </Box>

        <Box className={classes.root}>
          <Button variant="contained" color="primary" onClick={handleAddUser}>
            Add User
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
