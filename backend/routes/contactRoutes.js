// Contact form routes
const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactController');
const { contactFormValidator } = require('../middleware/validator');

// POST /api/contact - Submit contact form
router.post('/contact', 
  contactFormValidator, 
  submitContactForm
);

module.exports = router; 