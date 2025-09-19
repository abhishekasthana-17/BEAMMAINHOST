const express = require('express');
const osInstallationController = require('../controllers/osInstallationController');

const router = express.Router();

// POST route for OS Installation submission
router.post('/os-installation', osInstallationController.handleOsSubmission);

module.exports = router; 