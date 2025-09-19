const express = require('express');
const localPartnerController = require('../controllers/localPartnerController');

const router = express.Router();

// POST route for Local Partner application submission
router.post('/local-partner', localPartnerController.handleLpSubmission);

module.exports = router; 