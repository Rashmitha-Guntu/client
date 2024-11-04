// src/components/Feedback.js

import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Grid, Rating } from '@mui/material';

const facultyList = [
  'Dr. Murali Mohan Vuttukuri',
  'Prof. Arun Kumar',
  'Prof. Samhitha',
  'Dr. B.Annapurna',
  'Prof. Lakshmi Ramani Burra'
];

const Feedback = () => {
  const [ratings, setRatings] = useState({});
  const [comments, setComments] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleRatingChange = (faculty, value) => {
    setRatings({
      ...ratings,
      [faculty]: value,
    });
  };

  const handleCommentChange = (faculty, value) => {
    setComments({
      ...comments,
      [faculty]: value,
    });
  };

  const handleSubmit = () => {
    // Here you can handle the submit action, such as sending data to an API
    console.log('Feedback Submitted:', { ratings, comments });
    setSubmitted(true);
  };

  return (
    <Box sx={{ padding: 4, bgcolor: '#f9f9f9', borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#3f51b5' }}>
        Faculty Feedback
      </Typography>
      <Paper elevation={3} sx={{ padding: 3, marginTop: 2 }}>
        {facultyList.map((faculty) => (
          <Box key={faculty} sx={{ marginBottom: 3 }}>
            <Typography variant="h6">{faculty}</Typography>
            <Rating
              name={`rating-${faculty}`}
              value={ratings[faculty] || 0}
              onChange={(event, newValue) => handleRatingChange(faculty, newValue)}
              sx={{ marginBottom: 1 }}
            />
            <TextField
              label="Comments"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={comments[faculty] || ''}
              onChange={(e) => handleCommentChange(faculty, e.target.value)}
            />
          </Box>
        ))}
        <Button
          variant="contained"
          onClick={handleSubmit}
          fullWidth
          sx={{ backgroundColor: '#3f51b5', color: 'white', marginTop: 2 }}
        >
          Submit Feedback
        </Button>
        {submitted && (
          <Typography variant="h6" sx={{ marginTop: 2, textAlign: 'center', color: 'green' }}>
            Feedback Submitted Successfully!
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default Feedback;
