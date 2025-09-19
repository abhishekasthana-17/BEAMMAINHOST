// CORS configuration middleware
const cors = require('cors');
const config = require('../config');

// Configure CORS options based on application config 
const corsMiddleware = cors({
  // Which website(s) can access your API (usually your frontend URL)
  origin: config.cors.origin,
  // What types of requests are allowed (GET, POST, etc.)
  methods: config.cors.methods,
  // Allow cookies and authentication headers
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
});

module.exports = corsMiddleware; 