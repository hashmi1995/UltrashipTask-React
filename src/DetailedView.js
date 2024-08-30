// src/DetailedView.js
import React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, Button } from '@mui/material';

function DetailedView({ student, onClose }) {
  return (
    <Dialog open={Boolean(student)} onClose={onClose}>
      <DialogTitle>{student.name}</DialogTitle>
      <DialogContent>
        <Typography variant="body1">Email: {student.email}</Typography>
        <Typography variant="body1">Phone: {student.phone}</Typography>
        <Typography variant="body1">Website: {student.website}</Typography>
        <Typography variant="body1">
          Address: {student.address.street}, {student.address.city}
        </Typography>
        <Typography variant="body1">Company: {student.company.name}</Typography>
        <Button variant="contained" color="primary" onClick={onClose}>
          Back to Tile View
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default DetailedView;
