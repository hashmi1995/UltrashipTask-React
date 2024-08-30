// src/HamburgerMenu.js
import React, { useState } from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function HamburgerMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Dashboard</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
      </Menu>
    </>
  );
}

export default HamburgerMenu;
