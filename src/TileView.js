// src/TileView.js
import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function TileView({ onTileClick }) {
  const [students, setStudents] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuId, setMenuId] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') //test api public
      .then(response => response.json())
      .then(data => setStudents(data));
  }, []);

  const handleMenuClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setMenuId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuId(null);
  };

  return (
    <Grid container spacing={3}>
      {students.map((student) => (
        <Grid item xs={12} sm={6} md={4} key={student.id}>
          <Paper style={{ padding: 16, position: 'relative' }}>
            <Typography variant="h6">{student.name}</Typography>
            <Typography variant="body2">{student.email}</Typography>
            <IconButton
              style={{ position: 'absolute', top: 8, right: 8 }}
              onClick={(e) => handleMenuClick(e, student.id)}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && menuId === student.id}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
              <MenuItem onClick={handleMenuClose}>Flag</MenuItem>
              <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
            </Menu>
            <Typography variant="body2">
              <a href="#" onClick={() => onTileClick(student)}>View Details</a>
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default TileView;
