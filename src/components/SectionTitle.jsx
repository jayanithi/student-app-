import React from 'react';
import { Box, Typography } from '@mui/material';

export default function SectionTitle({ eyebrow, title, description, action }) {
  return (
    <Box sx={{ mb: 2.5 }}>
      {eyebrow && (
        <Typography sx={{ fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'text.secondary', mb: 1 }}>
          {eyebrow}
        </Typography>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, alignItems: 'flex-start' }}>
        <Box>
          <Typography variant="h4" sx={{ mb: description ? 1 : 0 }}>
            {title}
          </Typography>
          {description && (
            <Typography sx={{ color: 'text.secondary', maxWidth: 650 }}>
              {description}
            </Typography>
          )}
        </Box>
        {action}
      </Box>
    </Box>
  );
}