import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from '@mui/material';

import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: <SpaceDashboardRoundedIcon />,
  },
  {
    label: 'Results',
    path: '/results',
    icon: <AssessmentRoundedIcon />,
  },
  {
    label: 'Schedule',
    path: '/archives',
    icon: <CalendarMonthRoundedIcon />,
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: <SettingsRoundedIcon />,
  },
];

export default function BottomNavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Hide navbar in login/register pages
  if (['/login', '/register'].includes(location.pathname)) return null;

  return (
    <Paper
      elevation={10}
      sx={{
        position: 'fixed',
        bottom: 12,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(95%, 520px)',
        borderRadius: '24px',
        overflow: 'hidden',
        zIndex: 1200,
      }}
    >
      <BottomNavigation
        value={location.pathname}
        onChange={(event, newValue) => navigate(newValue)}
        sx={{
          height: 70,
          bgcolor: '#ffffff',
        }}
      >
        {navItems.map((item) => (
          <BottomNavigationAction
            key={item.path}
            label={item.label}
            value={item.path}
            icon={item.icon}
            sx={{
              '&.Mui-selected': {
                color: '#0A4A8A',
                fontWeight: 'bold',
              },
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}