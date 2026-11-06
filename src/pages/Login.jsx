import React from 'react';
import {
  Box,
  Button,
  InputAdornment,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
      <Box sx={{ width: '100%', maxWidth: 620, mx: 'auto' }}>
        <Paper sx={{ p: { xs: 3, sm: 6 }, borderRadius: '32px' }}>
          <Stack spacing={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.4 }}>
              <SchoolRoundedIcon sx={{ color: 'primary.main', fontSize: 34 }} />
              <Typography
                sx={{
                  fontWeight: 800,
                  color: 'primary.dark',
                  fontSize: { xs: 22, sm: 28 },
                }}
              >
                The Academic Curator
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: 40, sm: 64 }, mb: 1.5 }}
              >
                Welcome Back
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 19, sm: 24 },
                  color: 'text.secondary',
                  lineHeight: 1.55,
                }}
              >
                Access your academic transcripts, performance metrics, and
                results portal.
              </Typography>
            </Box>

            <Stack spacing={3}>
              <Box>
                <Typography sx={{ mb: 1.2, fontWeight: 700, fontSize: 18 }}>
                  Student ID
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Enter your university ID"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BadgeRoundedIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      bgcolor: '#F3F4F8',
                      borderRadius: '16px',
                    },
                  }}
                />
              </Box>

              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 1.2,
                  }}
                >
                  <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
                    Password
                  </Typography>
                  <Link
                    component="button"
                    underline="none"
                    sx={{ fontWeight: 700, color: 'primary.dark' }}
                  >
                    Forgot Password?
                  </Link>
                </Box>

                <TextField
                  fullWidth
                  type="password"
                  placeholder="••••••••"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockRoundedIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      bgcolor: '#F3F4F8',
                      borderRadius: '16px',
                    },
                  }}
                />
              </Box>
            </Stack>

            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardRoundedIcon />}
              onClick={() => navigate('/dashboard')}
              sx={{ py: 2.2, fontSize: 18 }}
            >
              Sign In to Portal
            </Button>

            <Typography
              align="center"
              sx={{ fontSize: 18, color: 'text.secondary' }}
            >
              New here?{' '}
              <Link
                component="button"
                underline="none"
                sx={{ fontWeight: 800 }}
                onClick={() => navigate('/register')}
              >
                Register now
              </Link>
            </Typography>

            <Box sx={{ borderTop: '1px solid #E5E7EB', pt: 4 }}>
              <Typography sx={{ fontSize: 18, mb: 3 }}>
                Technical Assistance
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Paper
                  variant="outlined"
                  sx={{
                    flex: 1,
                    p: 2.5,
                    borderRadius: '18px',
                    bgcolor: '#F4F5FA',
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <HelpOutlineRoundedIcon sx={{ color: 'primary.main' }} />
                    <Typography sx={{ fontWeight: 800 }}>HELP DESK</Typography>
                  </Stack>
                </Paper>

                <Paper
                  variant="outlined"
                  sx={{
                    flex: 1,
                    p: 2.5,
                    borderRadius: '18px',
                    bgcolor: '#F4F5FA',
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <DnsRoundedIcon sx={{ color: 'primary.main' }} />
                    <Typography sx={{ fontWeight: 800 }}>IT STATUS</Typography>
                  </Stack>
                </Paper>
              </Stack>
            </Box>
          </Stack>
        </Paper>

        <Typography
          align="center"
          sx={{ mt: 4, color: '#8B909A', fontSize: { xs: 18, sm: 20 } }}
        >
          © 2024 The Academic Curator. Authorized access only. &nbsp;|&nbsp;
          Privacy Policy
        </Typography>
      </Box>
    </Box>
  );
}