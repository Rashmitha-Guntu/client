// src/components/Attendance.js

import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Grid } from '@mui/material';

const attendanceData = {
  MSWD: { attended: 17, conducted: 20 }, // Example data
  OS: { attended: 15, conducted: 20 },
  Linux: { attended: 18, conducted: 20 },
  NPS: { attended: 16, conducted: 20 },
  MP: { attended: 19, conducted: 20 },
};

const Attendance = () => {
  const [subject, setSubject] = useState('');
  const [attendanceInfo, setAttendanceInfo] = useState(null);

  const handleCheckAttendance = () => {
    const subjectData = attendanceData[subject];

    if (subjectData) {
      setAttendanceInfo(subjectData);
    } else {
      setAttendanceInfo(null);
      alert('Please enter a valid subject (MSWD, OS, Linux, NPS, MP)');
    }
  };

  const calculatePercentage = (attended, conducted) => {
    return ((attended / conducted) * 100).toFixed(2);
  };

  return (
    <Box sx={{ padding: 4, bgcolor: '#f9f9f9', borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#3f51b5' }}>
        Attendance Checker
      </Typography>
      <Paper elevation={3} sx={{ padding: 3, marginTop: 2 }}>
        <TextField
          label="Enter Subject (MSWD, OS, Linux, NPS, MP)"
          variant="outlined"
          fullWidth
          value={subject}
          onChange={(e) => setSubject(e.target.value.toUpperCase())} // Convert input to uppercase for consistency
          sx={{ marginBottom: 2 }}
        />
        <Button
          variant="contained"
          onClick={handleCheckAttendance}
          fullWidth
          sx={{ backgroundColor: '#3f51b5', color: 'white' }}
        >
          Check Attendance
        </Button>
        {attendanceInfo && (
          <Grid container spacing={2} sx={{ marginTop: 3 }}>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ textAlign: 'center', color: '#3f51b5' }}>
                Attendance Details for {subject}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">
                Classes Conducted: {attendanceInfo.conducted}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">
                Classes Attended: {attendanceInfo.attended}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ textAlign: 'center', color: '#3f51b5' }}>
                Attendance Percentage: {calculatePercentage(attendanceInfo.attended, attendanceInfo.conducted)}%
              </Typography>
            </Grid>
          </Grid>
        )}
      </Paper>
    </Box>
  );
};

export default Attendance;
