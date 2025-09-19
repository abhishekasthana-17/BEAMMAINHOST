const express = require('express');
const router = express.Router();
const investorController = require('../controllers/investorController');

// POST /api/investor
router.post('/investor', investorController.handleInvestorForm);

module.exports = router;