const express = require('express');
const applyController = require('../controllers/applyController');
const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

// POST /api/apply - Submit job application with file upload support
router.post('/apply', upload, applyController.handleApplySubmission);

module.exports = router; 