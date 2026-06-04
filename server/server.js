const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const contactRoute = require('./routes/contact');

// API Routes
app.use('/api/contact', contactRoute);

// Basic check route
app.get('/', (req, res) => {
  res.send('Kaushal Khadka Portfolio Backend API is operational!');
});

// Database connection & Server start
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/kaushal_portfolio';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully database operational!');
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err.message);
    
    // Fallback: Start server anyway so API endpoints can output status/demo modes
    app.listen(PORT, () => {
      console.log(`Server started in DEMO Mode on port ${PORT} (Database offline)`);
    });
  });
