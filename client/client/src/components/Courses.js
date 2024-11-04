// src/components/Courses.js

import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

const coursesData = [
  { id: 1, title: "MERN Stack Web Development", description: "Build dynamic applications with MongoDB, Express, React, and Node.js for a seamless JavaScript experience." },
  { id: 2, title: "Operating Systems", description: "Operating systems manage hardware and provide essential services for applications." },
  { id: 3, title: "Linux Administration & Automation", description: "Manage and automate tasks in Linux environments for secure and efficient server operations." },
  { id: 4, title: "Network Protocols And Security", description: "Protocols and security measures ensure safe and reliable network communications." },
  { id: 5, title: "Mathematical Programming", description: "Formulate and solve optimization problems for best outcomes under constraints." },
];

const Courses = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#3f51b5', textAlign: 'center', marginBottom: 4 }}>
        Available Courses
      </Typography>
      <Grid container spacing={3}>
        {coursesData.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card 
              sx={{ 
                height: '100%', 
                boxShadow: 4, 
                transition: 'transform 0.3s ease-in-out', 
                '&:hover': { 
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
                backgroundColor: '#ffffff',
              }}
            >
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: 'bold', color: '#2e7d32' }}>
                  {course.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1.6 }}>
                  {course.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Courses;
