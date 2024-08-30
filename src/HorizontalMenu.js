// src/HorizontalMenu.js
import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

function HorizontalMenu() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Students</Button>
        <Button color="inherit">Courses</Button>
        <Button color="inherit">About</Button>
      </Toolbar>
    </AppBar>
  );
}

export default HorizontalMenu;
