const axios = require('axios');
const config = require('../config');
const { google } = require('googleapis');
const path = require('path');

/*
  This service forwards application data to a Google Apps Script Web App
  (deployed as "Anyone with the link"). The script writes to Google Sheets.

  Configure env var GOOGLE_APPS_SCRIPT_WEBAPP_URL with the deployment URL.
*/

const pushCareerApplication = async (payload) => {
  const url = process.env.GOOGLE_APPS_SCRIPT_WEBAPP_URL || config.google?.appsScriptWebAppUrl;
  if (!url) return; // silently skip if not configured

  try {
    await axios.post(url, payload, { headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    console.error('Google Sheets push failed:', err.response?.data || err.message);
  }
};

// Newsletter Google Sheets integration
const addRowToGoogleSheet = async (values) => {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: path.join(__dirname, '../utils/newsletter-credentials.json'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = '1lDcf6yE1tdO226tO1HmoQWH8E-LDWcjwUHDMJMqLnUA';

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A1',
      valueInputOption: 'RAW',
      requestBody: {
        values: [values],
      },
    });

    console.log('✅ Row added to Google Sheet');
  } catch (error) {
    console.error('❌ Error adding row to Google Sheet:', error);
    throw error;
  }
};

module.exports = { pushCareerApplication, addRowToGoogleSheet };


