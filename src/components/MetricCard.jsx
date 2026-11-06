import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

export default function MetricCard({ title, value, subtitle, color = 'primary.main', textColor = '#fff', children }) {
  return (
    <Paper
      sx={{
        p: 3,
        background: color,
        color: textColor,
      }}
    >
      <Typography sx={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.92 }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: { xs: 44, sm: 56 }, lineHeight: 1, fontWeight: 900, mt: 1 }}>
        {value}
      </Typography>
      {subtitle && (
        <Typography sx={{ mt: 1.4, fontWeight: 700, fontSize: 13, opacity: 0.96 }}>
          {subtitle}
        </Typography>)}
      {children && <Box sx={{ mt: 2 }}>{children}</Box>}
    </Paper>
  );
}