// Configuration settings for the application
require('dotenv').config();

module.exports = {
  // Server configuration
  server: {
    port: process.env.PORT || 3001,
  },
  
  // Postmark configuration
  postmark: {
    apiKey: process.env.POSTMARK_API_KEY,
    apiUrl: 'https://api.postmarkapp.com/email',
    fromEmail: 'site@beamwallet.com',
    replyEmail: 'participate@beamwallet.com', // if people want to reply to the email
  },

  // Email destinations based on subject
  // This is from Contact Us form
  subjectToEmail: {
    'General Information': 'contact@beamwallet.com', 
    'Investors': 'investors@beamwallet.com',
    'Local Partners': 'localpartner@beamwallet.com', 
    'Recruiting': 'hr@beamwallet.com',
    'Support': 'support@beamwallet.com',
  },
  
  // Email destinations for other forms
  applicationEmailTo: process.env.APPLICATION_EMAIL_TO || 'hr@beamwallet.com', 
  lsInstallationEmailTo: process.env.LS_INSTALLATION_EMAIL_TO || 'localstore@beamwallet.com', 
  osInstallationEmailTo: process.env.OS_INSTALLATION_EMAIL_TO || 'onlinestore@beamwallet.com',
  careerApplicationEmailTo: process.env.CAREER_APPLICATION_EMAIL_TO || 'hr@beamwallet.com',
  localPartnerEmailTo: process.env.LOCAL_PARTNER_EMAIL_TO || 'localpartner@beamwallet.com',
  
  // CORS configuration
  cors: {
    origin: [
      'https://beamwallet.com',
      'https://www.beamwallet.com',
      'http://localhost:3000'
    ],
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
  },

  // AWS S3 configuration for logging
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    s3Region: process.env.AWS_S3_REGION,
    s3BucketName: process.env.AWS_S3_BUCKET_NAME,
  },

  // Google Apps Script Web App for Sheets logging (optional)
  google: {
    appsScriptWebAppUrl: process.env.GOOGLE_APPS_SCRIPT_WEBAPP_URL,
  },
}; 