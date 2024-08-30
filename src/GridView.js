// src/GridView.js
import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography } from '@mui/material';

function GridView() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')   //test api public
      .then(response => response.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <Grid container spacing={3}>
      {students.map((student) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={student.id}>
          <Paper style={{ padding: 16 }}>
            <Typography variant="h6">{student.name}</Typography>
            <Typography variant="body2">Email: {student.email}</Typography>
            <Typography variant="body2">Phone: {student.phone}</Typography>
            <Typography variant="body2">Website: {student.website}</Typography>
            <Typography variant="body2">Company: {student.company.name}</Typography>
            <Typography variant="body2">City: {student.address.city}</Typography>
            <Typography variant="body2">Street: {student.address.street}</Typography>
            <Typography variant="body2">Suite: {student.address.suite}</Typography>
            <Typography variant="body2">Zipcode: {student.address.zipcode}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default GridView;
