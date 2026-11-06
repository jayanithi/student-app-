import React from 'react';
import {
  Box,
  MenuItem,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import PrivacyTipRoundedIcon from '@mui/icons-material/PrivacyTipRounded';
import GavelRoundedIcon from '@mui/icons-material/GavelRounded';
import InfoCard from '../components/InfoCard';

function SettingRow({ title, subtitle, action }) {
  return (
    <Box sx={{ p: 2, bgcolor: '#fff', borderRadius: '16px' }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Box>
          <Typography sx={{ fontWeight: 700 }}>{title}</Typography>
          {subtitle && (
            <Typography sx={{ color: 'text.secondary', fontSize: 13 }}>
              {subtitle}
            </Typography>
          )}
        </Box>
        {action}
      </Stack>
    </Box>
  );
}

export default function Settings() {
  return (
    <Stack spacing={2.5}>
      <InfoCard sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            width: 96,
            height: 96,
            mx: 'auto',
            mb: 2,
            borderRadius: '18px',
            bgcolor: 'primary.dark',
            display: 'grid',
            placeItems: 'center',
            color: '#fff',
            fontWeight: 900,
            fontSize: 36,
          }}
        >
          A
        </Box>

        <Typography
          sx={{
            fontSize: 12,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'text.secondary',
          }}
        >
          Student Member
        </Typography>

        <Typography variant="h4" sx={{ mt: 1 }}>
          Alexander Sterling
        </Typography>

        <Typography sx={{ color: 'text.secondary', mt: 1 }}>
          Student ID: #SC-90442-2024
        </Typography>
      </InfoCard>

      <InfoCard sx={{ bgcolor: '#F3F4F8' }}>
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2.5 }}>
          <ManageAccountsRoundedIcon color="primary" />
          <Typography variant="h6">Account Settings</Typography>
        </Stack>

        <Stack spacing={2}>
          <SettingRow
            title="Email Notifications"
            subtitle="Weekly digest and grade alerts"
            action={<Switch defaultChecked />}
          />
          <SettingRow
            title="Push Notifications"
            subtitle="Real-time deadline reminders"
            action={<Switch />}
          />

          <TextField select label="Preferred Language" defaultValue="English (US)">
            <MenuItem value="English (US)">English (US)</MenuItem>
            <MenuItem value="English (UK)">English (UK)</MenuItem>
          </TextField>

          <SettingRow
            title="Calendar Sync"
            subtitle="Export to Google / iCal"
            action={
              <Typography sx={{ fontWeight: 800, color: 'primary.dark' }}>
                ↺
              </Typography>
            }
          />
        </Stack>
      </InfoCard>

      <InfoCard sx={{ bgcolor: '#F3F4F8' }}>
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2.5 }}>
          <ShieldRoundedIcon color="primary" />
          <Typography variant="h6">Security</Typography>
        </Stack>

        <Stack spacing={2}>
          <SettingRow
            title="Change Password"
            action={
              <Typography sx={{ color: 'primary.dark', fontWeight: 700 }}>
                Open
              </Typography>
            }
          />
          <SettingRow
            title="Authenticator"
            subtitle="Two-factor authentication"
            action={
              <Typography sx={{ color: 'primary.dark', fontWeight: 700 }}>
                Enable
              </Typography>
            }
          />
          <SettingRow
            title="Active Sessions"
            subtitle='MacBook Pro 14” • London, UK'
            action={
              <Typography sx={{ color: 'error.main', fontWeight: 700 }}>
                Logout all
              </Typography>
            }
          />
        </Stack>
      </InfoCard>

      <InfoCard sx={{ bgcolor: '#F3F4F8' }}>
        <Stack spacing={3}>
          <Box>
            <HelpRoundedIcon sx={{ color: '#8D4A14', mb: 1 }} />
            <Typography variant="h6">Help Center</Typography>
            <Typography sx={{ mt: 1, color: 'text.secondary' }}>
              Find answers to academic inquiries and platform documentation.
            </Typography>
            <Typography sx={{ mt: 1.5, color: 'primary.dark', fontWeight: 700 }}>
              Visit Knowledge Base ↗
            </Typography>
          </Box>

          <Box>
            <PrivacyTipRoundedIcon sx={{ color: '#0C5A75', mb: 1 }} />
            <Typography variant="h6">Privacy Policy</Typography>
            <Typography sx={{ mt: 1, color: 'text.secondary' }}>
              Learn how we curate and protect your academic data and integrity.
            </Typography>
            <Typography sx={{ mt: 1.5, color: 'primary.dark', fontWeight: 700 }}>
              Read Policy
            </Typography>
          </Box>

          <Box>
            <GavelRoundedIcon sx={{ color: '#6B7280', mb: 1 }} />
            <Typography variant="h6">Terms of Service</Typography>
            <Typography sx={{ mt: 1, color: 'text.secondary' }}>
              Review the contractual obligations for student platform usage.
            </Typography>
            <Typography sx={{ mt: 1.5, color: 'primary.dark', fontWeight: 700 }}>
              View Terms
            </Typography>
          </Box>
        </Stack>
      </InfoCard>

      <Typography
        align="center"
        sx={{
          color: '#8B909A',
          fontSize: 12,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
        }}
      >
        The Academic Curator v2.4.0-stable
      </Typography>
    </Stack>
  );
}