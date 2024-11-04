// src/components/Faculty.js

import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider, Avatar } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const Faculty = () => {
  // Sample faculty data - you can replace this with data from props or an API call
  const facultyList = [
    { name: 'Dr. Murali Mohan Vuttukuri', department: 'MSWD (Cs&it)' },
    { name: 'Prof. Arun Kumar', department: 'Operating System (Cse-H)' },
    { name: 'Prof. Samhitha', department: 'Linux (Cse-H)' },
    { name: 'Dr. B.Annapurna', department: 'Nps (Cse-H)' },
    { name: 'Prof. Lakshmi Ramani Burra', department: 'Mp (Cse-H)' },
  ];

  return (
    <Box
      sx={{
        maxWidth: '600px',
        margin: 'auto',
        padding: '40px 20px',
        backgroundColor: '#f4f6f8',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h4" align="center" color="primary" gutterBottom>
        Faculty Directory
      </Typography>
      <List>
        {facultyList.map((faculty, index) => (
          <React.Fragment key={index}>
            <ListItem sx={{ padding: '16px 0' }}>
              <Avatar sx={{ bgcolor: 'primary.main', marginRight: 2 }}>
                <SchoolIcon />
              </Avatar>
              <ListItemText
                primary={faculty.name}
                secondary={faculty.department}
                primaryTypographyProps={{
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  color: 'text.primary',
                }}
                secondaryTypographyProps={{
                  color: 'text.secondary',
                  fontSize: '0.9rem',
                }}
              />
            </ListItem>
            {index < facultyList.length - 1 && <Divider variant="middle" />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default Faculty;
