import React from 'react';
import {
  Box,
  Button,
  Chip,
  Divider,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import InfoCard from '../components/InfoCard';
import SectionTitle from '../components/SectionTitle';
import { useAppStore } from '../Store';

export default function Results() {
  const { hasArrear, data } = useAppStore();

  return (
    <Stack spacing={2.5}>
      <SectionTitle
        eyebrow="Performance Review"
        title="Fall Semester 2023"
        description="Detailed breakdown of academic achievements and core competency assessments for the current term."
      />

      <Button
        variant="contained"
        startIcon={<DownloadRoundedIcon />}
        sx={{ alignSelf: 'flex-start' }}
      >
        Download PDF
      </Button>

      <InfoCard>
        <Typography
          sx={{
            fontSize: 11,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'text.secondary',
          }}
        >
          Semester GPA
        </Typography>

        <Typography
          sx={{
            mt: 1,
            fontSize: 58,
            lineHeight: 1,
            fontWeight: 900,
            color: hasArrear ? 'error.main' : 'primary.dark',
          }}
        >
          {data.student.semesterGpa.toFixed(2)}
          <Box component="span" sx={{ fontSize: 24, color: 'text.primary' }}>
            {' '}
            / 4.0
          </Box>
        </Typography>

        <LinearProgress
          variant="determinate"
          value={hasArrear ? 0 : 96}
          sx={{ mt: 3, height: 8, borderRadius: 999 }}
        />

        <Typography
          sx={{
            mt: 2,
            color: hasArrear ? 'error.main' : 'text.secondary',
            fontStyle: 'italic',
          }}
        >
          {hasArrear
            ? 'GPA nullified due to uncleared subjects.'
            : 'Top 5% of the Architecture & Design Department'}
        </Typography>
      </InfoCard>

      <InfoCard sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            width: 84,
            height: 84,
            borderRadius: '20px',
            mx: 'auto',
            display: 'grid',
            placeItems: 'center',
            bgcolor: hasArrear ? '#FCE7E7' : '#DDF5E7',
            mb: 2,
          }}
        >
          {hasArrear ? (
            <CancelRoundedIcon sx={{ color: 'error.main', fontSize: 38 }} />
          ) : (
            <CheckCircleRoundedIcon sx={{ color: 'success.main', fontSize: 38 }} />
          )}
        </Box>

        <Typography
          sx={{
            fontSize: 11,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'text.secondary',
          }}
        >
          Academic Standing
        </Typography>

        <Typography
          sx={{
            mt: 1,
            fontWeight: 900,
            fontSize: 48,
            color: hasArrear ? 'error.main' : 'success.main',
          }}
        >
          {hasArrear ? 'REAPPEAR' : 'PASS'}
        </Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          {hasArrear ? 'Course progression on hold' : 'Promoted to 6th Semester'}
        </Typography>
      </InfoCard>

      <InfoCard>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Typography variant="h6">Subject Breakdown</Typography>
          {hasArrear && (
            <Chip size="small" label="1 ARREAR" color="error" variant="outlined" />
          )}
        </Stack>

        <Stack spacing={2}>
          {data.subjectBreakdown.map((subject, index) => (
            <Box key={index}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: 17,
                      color: subject.arrear ? 'error.main' : 'text.primary',
                    }}
                  >
                    {subject.name}
                  </Typography>

                  <Typography sx={{ color: 'text.secondary', fontSize: 13 }}>
                    {subject.code} • {subject.credits} Credits
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    minWidth: 78,
                    textAlign: 'center',
                    color: subject.arrear ? 'error.main' : 'text.primary',
                  }}
                >
                  {subject.internal}
                </Typography>

                <Typography
                  sx={{
                    minWidth: 78,
                    textAlign: 'center',
                    color: subject.arrear ? 'error.main' : 'text.primary',
                  }}
                >
                  {subject.external}
                </Typography>
              </Stack>

              {index !== data.subjectBreakdown.length - 1 && <Divider sx={{ mt: 2 }} />}
            </Box>
          ))}
        </Stack>
      </InfoCard>

      <InfoCard>
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: 28,
            color: hasArrear ? 'error.main' : '#5B1D0F',
          }}
        >
          {hasArrear ? 'Reappearance Required' : "Dean's List Contender"}
        </Typography>

        <Typography sx={{ mt: 1.5, color: 'text.secondary', lineHeight: 1.8 }}>
          {hasArrear
            ? 'Please register for the supplementary examination for Sustainable Materials (ENG-104). Applications close on Jan 20th.'
            : "Based on your performance this semester, you have been nominated for the Dean's List. Final notification will be sent within 48 hours of grade finalization."}
        </Typography>
      </InfoCard>

      <InfoCard>
        <Typography sx={{ fontWeight: 700 }}>Evaluated by Department Board</Typography>
        <Typography sx={{ mt: 1.5, color: 'text.secondary', lineHeight: 1.8 }}>
          All marks are verified by the internal examination committee. For
          discrepancies, visit the Administrative Office before Jan 15th.
        </Typography>
      </InfoCard>
    </Stack>
  );
}