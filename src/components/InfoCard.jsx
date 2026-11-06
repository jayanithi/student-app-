import React from 'react';
import { Paper } from '@mui/material';

export default function InfoCard({ children, sx = {} }) {
  return (
    <Paper sx={{ p: 3, ...sx }}>
      {children}
    </Paper>
  );
}