const express = require('express');
const router = express.Router();
const { handleConsentLog } = require('../controllers/consentController');

// POST /api/log-consent - Log user's cookie consent
router.post('/log-consent', handleConsentLog);

module.exports = router; 