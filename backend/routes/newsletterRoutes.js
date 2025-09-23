const express = require('express');
const { newsletterSubscribe } = require('../controllers/newsletterController');

const router = express.Router();

// POST /api/newsletter/subscribe
router.post('/subscribe', newsletterSubscribe);

module.exports = router;