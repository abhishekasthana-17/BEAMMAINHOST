const express = require('express');
const lsInstallationController = require('../controllers/lsInstallationController');

const router = express.Router();

// POST route for LS Installation submission
router.post('/installation', lsInstallationController.handleLsSubmission);

module.exports = router; 