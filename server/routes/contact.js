const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// @route   POST /api/contact
// @desc    Submit a contact form message
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Server-side validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: 'Please fill in all required fields.' });
  }

  try {
    const newMessage = new Message({
      name,
      email,
      subject,
      message
    });

    await newMessage.save();

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully. Thank you!'
    });
  } catch (error) {
    console.error('Error saving message:', error.message);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ success: false, error: messages.join(', ') });
    }

    return res.status(500).json({
      success: false,
      error: 'Server Error. Failed to send message. Please try again later.'
    });
  }
});

module.exports = router;
