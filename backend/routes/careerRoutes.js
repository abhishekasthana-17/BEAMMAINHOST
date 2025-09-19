const express = require('express');
const router = express.Router();
const careerController = require('../controllers/careerApplicationController');

// POST route for career applications
router.post('/career-apply', careerController.handleCareerApplication);

module.exports = router; 