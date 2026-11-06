import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { AppProvider } from './Store';
import AppHeader from './components/AppHeader';
import BottomNavBar from './components/BottomNavBar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Results from './pages/Results';
import Archives from './pages/Archives';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function Layout() {
  const location = useLocation();
  const authPages = ['/login', '/register'];
  const isAuthPage = authPages.includes(location.pathname);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppHeader />
      <Container maxWidth="sm" sx={{ px: { xs: 2, sm: 3 }, pt: isAuthPage ? 4 : 3, pb: isAuthPage ? 6 : 14 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/results" element={<Results />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Container>
      <BottomNavBar />
    </Box>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  );
}