import React from 'react';
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useLocation } from 'react-router-dom';

const noHeaderRoutes = ['/login', '/register'];

export default function AppHeader() {
  const location = useLocation();

  if (noHeaderRoutes.includes(location.pathname)) return null;

  return (
    <AppBar position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'rgba(238,241,247,0.92)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #E5E7EB',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: 74 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
          <SchoolRoundedIcon sx={{ color: 'primary.main', fontSize: 26 }} />
          <Typography sx={{ fontWeight: 800, color: 'primary.dark', fontSize: { xs: 18, sm: 22 } }}>
            The Academic Curator
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton>
            <SearchRoundedIcon />
          </IconButton>
          <IconButton>
            <NotificationsNoneRoundedIcon />
          </IconButton>
          <Avatar sx={{ bgcolor: 'primary.dark', width: 36, height: 36 }}>A</Avatar>
        </Box>   </Toolbar>
    </AppBar>
  );
}