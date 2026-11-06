import React from 'react';
import {
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Typography,
  LinearProgress,
} from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import InfoCard from '../components/InfoCard';
import SectionTitle from '../components/SectionTitle';

export default function Archives() {
  return (
    <Stack spacing={2.5}>
      <SectionTitle
        title="Academic Archives"
        description="Access your scholarly milestones. Select your academic period to view a curated breakdown of your performance and credits."
      />

      <InfoCard>
        <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ mb: 3 }}>
          <Box sx={{ width: 58, height: 58, borderRadius: '16px', bgcolor: 'primary.main', color: '#fff', display: 'grid', placeItems: 'center' }}>
            <SearchRoundedIcon />
          </Box>
          <Box>
            <Typography variant="h6">Search Parameters</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Define the temporal scope of your records</Typography>
          </Box>
        </Stack>
        <Stack spacing={3}>
          <TextField select label="Academic Year" defaultValue="2024-25">
            <MenuItem value="2024-25">2024-25</MenuItem>
            <MenuItem value="2023-24">2023-24</MenuItem>
          </TextField>
          <TextField select label="Semester" defaultValue="Semester 1">
            <MenuItem value="Semester 1">Semester 1</MenuItem>
            <MenuItem value="Semester 2">Semester 2</MenuItem>
          </TextField>
          <Button variant="contained" endIcon={<ArrowForwardRoundedIcon />}>View Results</Button>
        </Stack>
      </InfoCard>

      <InfoCard>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Box>
            <Typography sx={{ display: 'inline-flex', px: 1.5, py: 0.4, bgcolor: '#9A4D07', color: '#fff', borderRadius: '999px', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Recent Activity
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>Last Viewed</Typography>
            <Typography sx={{ mt: 1, color: 'text.secondary' }}>You recently accessed your 2023-24 Semester 2 report on Oct 12.</Typography>
            <Typography sx={{ mt: 2, color: 'primary.dark', fontWeight: 700 }}>Quick Re-access ↗</Typography>
          </Box>
          <HistoryRoundedIcon sx={{ color: '#7A2E0B' }} />
        </Stack>
      </InfoCard>

      <InfoCard
        sx={{
          minHeight: 210,
          color: '#fff',
          background: 'linear-gradient(135deg, #111C20, #0A4A8A 70%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}  >
        <Typography sx={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.85 }}>
          Academic Excellence
        </Typography>
        <Typography sx={{ fontWeight: 900, fontSize: 24, maxWidth: 260, mt: 1 }}>
          Curating your path to graduation.
        </Typography>
      </InfoCard>

      <InfoCard>
        <Typography variant="h5">Degree Progress</Typography>
        <Typography sx={{ color: 'text.secondary', mt: 1 }}>Cumulative Completion (102/120 Credits)</Typography>
        <Typography sx={{ mt: 3, textAlign: 'right', fontWeight: 900, fontSize: 54, color: 'primary.dark' }}>85%</Typography>
        <LinearProgress variant="determinate" value={85} sx={{ mt: 2, height: 10, borderRadius: 999 }} />
      </InfoCard>
    </Stack>
  );
}