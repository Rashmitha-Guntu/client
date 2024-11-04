// src/components/Timetable.js

import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const timetableData = [
  { day: "Monday", time: "10:00 - 11:30", course: "MSWD (MERN Stack Web Development)" },
  { day: "Monday", time: "11:45 - 1:15", course: "Operating Systems" },
  { day: "Tuesday", time: "10:00 - 11:30", course: "Linux Administration & Automation" },
  { day: "Tuesday", time: "11:45 - 1:15", course: "Mathematical Programming" },
  { day: "Wednesday", time: "10:00 - 11:30", course: "Network Protocols and Security" },
  { day: "Thursday", time: "10:00 - 11:30", course: "MSWD (MERN Stack Web Development)" },
  { day: "Thursday", time: "11:45 - 1:15", course: "Operating Systems" },
  { day: "Friday", time: "10:00 - 11:30", course: "Linux Administration & Automation" },
  { day: "Friday", time: "11:45 - 1:15", course: "Mathematical Programming" },
];

const Timetable = () => {
  return (
    <Box sx={{ padding: 4, bgcolor: '#f9f9f9', borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#3f51b5', marginBottom: 2 }}>
        Weekly Timetable
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 1 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ backgroundColor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Day</TableCell>
              <TableCell align="center" sx={{ backgroundColor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Time</TableCell>
              <TableCell align="center" sx={{ backgroundColor: '#3f51b5', color: 'white', fontWeight: 'bold' }}>Course</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {timetableData.map((entry, index) => (
              <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' } }}>
                <TableCell align="center" sx={{ fontWeight: 'medium', padding: 2 }}>{entry.day}</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'medium', padding: 2 }}>{entry.time}</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'medium', padding: 2 }}>{entry.course}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Timetable;

