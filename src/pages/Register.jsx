import React from 'react';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
      <Box sx={{ width: '100%', maxWidth: 620 }}>
        <Paper sx={{ p: { xs: 3, sm: 6 }, borderRadius: '32px' }}>
          <Typography variant="h3" sx={{ fontSize: { xs: 34, sm: 56 }, mb: 1.5 }}>
            Create Account
          </Typography>
          <Typography sx={{ fontSize: { xs: 18, sm: 22 }, color: 'text.secondary', mb: 5, lineHeight: 1.5 }}>
            Enter your credentials to register for the upcoming semester.
          </Typography>

          <Stack spacing={3}>
            <TextField
              fullWidth
              placeholder="Johnathan Doe"
              label="Full Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"><PersonRoundedIcon color="action" /></InputAdornment>
                ),
              }}
              sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#F3F4F8', borderRadius: '16px' } }}
            />

            <TextField
              fullWidth
              placeholder="ID-2024-XXXX"
              label="Student ID" InputProps={{
                startAdornment: (
                  <InputAdornment position="start"><BadgeRoundedIcon color="action" /></InputAdornment>
                ),
              }}
              sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#F3F4F8', borderRadius: '16px' } }}
            />

            <TextField
              fullWidth placeholder="j.doe@university.edu"
              label="University Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"><AlternateEmailRoundedIcon color="action" /></InputAdornment>
                ),
              }}
              sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#F3F4F8', borderRadius: '16px' } }}
            />

            <TextField
              fullWidth
              placeholder="••••••••••••"
              type="password" label="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"><LockRoundedIcon color="action" /></InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton><VisibilityRoundedIcon color="action" /></IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#F3F4F8', borderRadius: '16px' } }}
            /><Button variant="contained" endIcon={<ArrowForwardRoundedIcon />} onClick={() => navigate('/login')}>
              Create Account
            </Button>
          </Stack>

          <Box sx={{ borderTop: '1px solid #E5E7EB', mt: 5, pt: 4 }}>
            <Typography align="center" sx={{ fontSize: 18, color: 'text.secondary' }}>
              Already have a curated profile?{' '}
              <Link component="button" underline="none" sx={{ fontWeight: 800 }} onClick={() => navigate('/login')}>
                Sign in here
              </Link>
            </Typography> </Box>
        </Paper>

        <Typography align="center" sx={{ mt: 4, color: '#6B7280', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          © 2024 The Academic Curator — Privacy Policy — Institutional Terms
        </Typography>
      </Box>
    </Box>
  );
}