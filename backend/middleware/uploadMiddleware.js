// Simple file handling middleware
const fileUpload = require('express-fileupload');

// Configure simple file upload middleware
const upload = fileUpload({
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  abortOnLimit: true,
  useTempFiles: false, // Store in memory
  createParentPath: true // Create directory path if not exist
});

module.exports = upload; 