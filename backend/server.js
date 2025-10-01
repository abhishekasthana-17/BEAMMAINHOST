require('dotenv').config();
const express = require('express');
const cors = require('cors');
const config = require('./config');
// const https = require('https'); // No longer needed here
// const fs = require('fs'); // No longer needed here
// const path = require('path'); // No longer needed here

// Import routes
const contactRoutes = require('./routes/contactRoutes');
const applyRoutes = require('./routes/applyRoutes');
const lsInstallationRoutes = require('./routes/lsInstallationRoutes');
const osInstallationRoutes = require('./routes/osInstallationRoutes');
const investorRoutes = require('./routes/investorRoutes');
const careerRoutes = require('./routes/careerRoutes');
const localPartnerRoutes = require('./routes/localPartnerRoutes');
const consentRoutes = require('./routes/consentRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');

const app = express();
const port = config.server.port || 3001;

// Middleware
const allowedOrigins = [
  'http://cmsdev434140809432.s3-website.eu-central-1.amazonaws.com',
  'http://localhost:5173'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // Allow requests with no origin (like mobile apps or curl requests)

    const cleanOrigin = origin.replace(/\/$/, '');
    if (allowedOrigins.includes(cleanOrigin)) {
      return callback(null, true);
    } else {
      console.error("❌ CORS blocked:", origin);
      return callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json()); // for parsing application/json

// API Routes
app.use('/api', contactRoutes);
app.use('/api', applyRoutes);
app.use('/api', lsInstallationRoutes);
app.use('/api', osInstallationRoutes);
app.use('/api', investorRoutes);
app.use('/api', careerRoutes);
app.use('/api', localPartnerRoutes);
app.use('/api', consentRoutes);
app.use('/api/newsletter', newsletterRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Beam Wallet Backend is running via HTTP!');
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start HTTP server
app.listen(port, '0.0.0.0', () => {
  console.log(`HTTP Server listening on port ${port}. Ready to be proxied by Nginx.`);
});

/*
// HTTPS server logic removed as Nginx will handle SSL termination

// Get absolute path to SSL certificates
// const sslKeyPath = path.join(__dirname, 'ssl', 'private.key');
// const sslCertPath = path.join(__dirname, 'ssl', 'certificate.crt');

// console.log('Looking for SSL key at:', sslKeyPath);
// console.log('Looking for SSL cert at:', sslCertPath);

// try {
//   if (fs.existsSync(sslKeyPath) && fs.existsSync(sslCertPath)) {
//     const sslOptions = {
//       key: fs.readFileSync(sslKeyPath),
//       cert: fs.readFileSync(sslCertPath)
//     };
    
//     https.createServer(sslOptions, app).listen(3002, '0.0.0.0', () => {
//       console.log(`HTTPS Server listening at port 3002`);
//     });
//   } else {
//     console.log('SSL certificates not found. HTTPS server not started.');
//   }
// } catch (err) {
//   console.error('Error starting HTTPS server:', err.message);
// }
*/