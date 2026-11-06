import React from 'react';
import {
  Avatar,
  Box,
  Chip,
  Grid,
  LinearProgress,
  Paper,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import ArchitectureRoundedIcon from '@mui/icons-material/ArchitectureRounded';
import { useAppStore } from '../Store';
import MetricCard from '../components/MetricCard';
import InfoCard from '../components/InfoCard';
import SectionTitle from '../components/SectionTitle';

export default function Dashboard() {
  const { hasArrear, setHasArrear, data } = useAppStore();
  const progress = Math.round(
    (data.student.creditsEarned / data.student.totalCredits) * 100
  );

  return (
    <Stack spacing={2.5}>
      <InfoCard sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography sx={{ fontWeight: 700 }}>
            Toggle arrear state for UI preview
          </Typography>
          <Switch
            checked={hasArrear}
            onChange={(e) => setHasArrear(e.target.checked)}
          />
        </Stack>
      </InfoCard>

      <SectionTitle
        eyebrow="Student Overview"
        title={
          <>
            Welcome back,{' '}
            <Box component="span" sx={{ color: 'primary.dark' }}>
              {data.student.name}
            </Box>
          </>
        }
      />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <InfoCard>
            <Typography
              sx={{
                fontSize: 11,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'text.secondary',
              }}
            >
              Enrollment ID
            </Typography>
            <Typography sx={{ mt: 1, fontSize: 24, fontWeight: 700 }}>
              {data.student.enrollmentId}
            </Typography>
          </InfoCard>
        </Grid>

        <Grid item xs={6}>
          <InfoCard>
            <Typography
              sx={{
                fontSize: 11,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'text.secondary',
              }}
            >
              Program
            </Typography>
            <Typography sx={{ mt: 1, fontSize: 22, fontWeight: 700 }}>
              {data.student.program}
            </Typography>
          </InfoCard>
        </Grid>
      </Grid>

      <MetricCard
        title="Cumulative GPA"
        value={data.student.cgpa.toFixed(2)}
        subtitle={hasArrear ? 'CGPA nullified due to 1 arrear' : '+0.14 from last term'}
        color={
          hasArrear
            ? 'linear-gradient(135deg, #B71C1C, #9A1111)'
            : 'linear-gradient(135deg, #0A4A8A, #083B6D)'
        }
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Chip
            icon={
              hasArrear ? (
                <WarningAmberRoundedIcon />
              ) : (
                <WorkspacePremiumRoundedIcon />
              )
            }
            label={hasArrear ? 'Arrear detected' : 'Honors track active'}
            sx={{ bgcolor: 'rgba(255,255,255,0.16)', color: '#fff' }}
          />
        </Stack>
      </MetricCard>

      <InfoCard>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2.5 }}
        >
          <Typography variant="h6" sx={{ color: 'primary.dark' }}>
            Recent Academic Results
          </Typography>
          <Typography sx={{ color: 'primary.dark', fontWeight: 700 }}>
            View Records →
          </Typography>
        </Stack>

        <Stack spacing={2}>
          {data.results.map((item, index) => (
            <Stack key={index} direction="row" spacing={2} alignItems="center">
              <Avatar
                sx={{
                  bgcolor:
                    index === 0
                      ? hasArrear
                        ? '#FCE7E7'
                        : '#D9EEF7'
                      : '#F7DDCF',
                  color:
                    index === 0 && hasArrear ? 'error.main' : 'primary.dark',
                }}
              >
                {index === 0 && hasArrear ? (
                  <ScienceRoundedIcon />
                ) : (
                  <ArchitectureRoundedIcon />
                )}
              </Avatar>

              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
                  {item.subject}
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>
                  {item.type} • {item.date}
                </Typography>
              </Box>

              <Box sx={{ textAlign: 'right' }}>
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: 30,
                    color: item.grade === 'U' ? 'error.main' : 'primary.dark',
                  }}
                >
                  {item.grade}
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: 12 }}>
                  {item.point}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </InfoCard>

      <InfoCard sx={{ border: hasArrear ? '1px solid #E9B4B4' : 'none' }}>
        <Typography variant="h6" sx={{ mb: 1.4 }}>
          Degree Completion
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 2 }}>
          Credits earned: {data.student.creditsEarned} of{' '}
          {data.student.totalCredits}
        </Typography>

        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 10,
            borderRadius: 999,
            bgcolor: '#DDE1E8',
            '& .MuiLinearProgress-bar': { borderRadius: 999 },
          }}
        />

        <Stack direction="row" justifyContent="space-between" sx={{ mt: 1.5 }}>
          <Typography
            sx={{
              fontSize: 12,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
          >
            Progress
          </Typography>
          <Typography sx={{ fontWeight: 700 }}>{progress}%</Typography>
        </Stack>

        <Typography
          sx={{
            mt: 3,
            color: hasArrear ? 'error.main' : 'text.secondary',
            fontSize: 14,
          }}
        >
          {hasArrear
            ? 'Outstanding requirement: Clear Sustainable Materials to resume honors track.'
            : 'Expected graduation: June 2025. You are currently on track for honors.'}
        </Typography>
      </InfoCard>

      <InfoCard>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Upcoming Exams
        </Typography>
        <Stack spacing={2}>
          {data.exams.map((exam, index) => (
            <Stack key={index} direction="row" spacing={2} alignItems="center">
              <Box sx={{ minWidth: 54, textAlign: 'center' }}>
                <Typography
                  sx={{ fontWeight: 800, color: 'primary.dark', fontSize: 14 }}
                >
                  {exam.month}
                </Typography>
                <Typography
                  sx={{ fontWeight: 900, fontSize: 38, lineHeight: 1 }}
                >
                  {exam.day}
                </Typography>
              </Box>

              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: 18 }}>
                  {exam.title}
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>
                  {exam.time} • {exam.place}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </InfoCard>

      <InfoCard sx={{ mb: 1 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Institutional Announcements
        </Typography>
        <Stack spacing={2}>
          {data.notices.map((notice, idx) => (
            <Paper
              key={idx}
              sx={{
                p: 2.5,
                bgcolor: '#F4F5FA',
                borderLeft: '4px solid',
                borderColor:
                  notice.tone === 'error'
                    ? 'error.main'
                    : notice.tone === 'warning'
                      ? '#5B1D0F'
                      : 'primary.main',
              }}
            >
              <Typography
                sx={{
                  fontSize: 11,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color:
                    notice.tone === 'error' ? 'error.main' : 'text.primary',
                }}
              >
                {notice.tag}
              </Typography>

              <Typography sx={{ mt: 1, fontWeight: 700, fontSize: 22 }}>
                {notice.title}
              </Typography>

              <Typography
                sx={{ mt: 1, color: 'text.secondary', lineHeight: 1.6 }}
              >
                {notice.text}
              </Typography>
            </Paper>
          ))}
        </Stack>
      </InfoCard>
    </Stack>
  );
}