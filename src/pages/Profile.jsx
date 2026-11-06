import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import InfoCard from '../components/InfoCard';

export default function ProfileSummary({ data }) {
  return (
    <Stack spacing={2.5}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <InfoCard>
            <TrendingUpRoundedIcon sx={{ color: '#A95B19', mb: 1 }} />
            <Typography
              sx={{
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'text.secondary',
              }}
            >
              Current GPA
            </Typography>
            <Typography sx={{ fontSize: 34, fontWeight: 900 }}>
              {data.student.cgpa.toFixed(2)}
            </Typography>
          </InfoCard>
        </Grid>

        <Grid item xs={12} sm={4}>
          <InfoCard>
            <LibraryBooksRoundedIcon sx={{ color: '#0C5A75', mb: 1 }} />
            <Typography
              sx={{
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'text.secondary',
              }}
            >
              Library Clearances
            </Typography>
            <Typography sx={{ fontSize: 30, fontWeight: 900 }}>
              All Clear
            </Typography>
          </InfoCard>
        </Grid>
      </Grid>

      <InfoCard
        sx={{
          background: 'linear-gradient(135deg, #0A4A8A, #063462)',
          color: '#fff',
        }}
      >
        <Typography sx={{ fontWeight: 800, fontSize: 24, mb: 3 }}>
          Academic Status
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography
              sx={{
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                opacity: 0.8,
              }}
            >
              Major
            </Typography>
            <Typography sx={{ mt: 1, fontSize: 28, fontWeight: 700 }}>
              {data.student.program}
            </Typography>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Typography
              sx={{
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                opacity: 0.8,
              }}
            >
              Year
            </Typography>
            <Typography sx={{ mt: 1, fontSize: 28, fontWeight: 700 }}>
              {data.student.year}
            </Typography>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Typography
              sx={{
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                opacity: 0.8,
              }}
            >
              Status
            </Typography>
            <Typography sx={{ mt: 1, fontSize: 28, fontWeight: 700 }}>
              {data.student.status}
            </Typography>
          </Grid>
        </Grid>
      </InfoCard>

      <InfoCard>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Contact Details
        </Typography>

        <Stack spacing={2}>
          <Box sx={{ p: 2, bgcolor: '#F3F4F8', borderRadius: '16px' }}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <AlternateEmailRoundedIcon color="primary" />
              <Typography>{data.student.email}</Typography>
            </Stack>
          </Box>

          <Box sx={{ p: 2, bgcolor: '#F3F4F8', borderRadius: '16px' }}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <CallRoundedIcon color="primary" />
              <Typography>{data.student.phone}</Typography>
            </Stack>
          </Box>
        </Stack>
      </InfoCard>
    </Stack>
  );
}