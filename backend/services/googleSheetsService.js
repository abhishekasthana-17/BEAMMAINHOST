const axios = require('axios');
const config = require('../config');
const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

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
    // Prefer credentials from env, fallback to file path
    const envJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
    const keyFilePath = path.join(__dirname, '../utils/newsletter-credentials.json');

    let auth;
    if (envJson && envJson.trim().length > 0) {
      try {
        // Remove accidental backticks and convert escaped newlines
        const cleaned = envJson.replace(/`/g, '').replace(/\\n/g, '\n');
        const credentials = JSON.parse(cleaned);
        auth = new google.auth.GoogleAuth({
          credentials,
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
        console.log('Using GOOGLE_SERVICE_ACCOUNT_JSON from environment for Sheets auth');
      } catch (e) {
        console.error('Invalid GOOGLE_SERVICE_ACCOUNT_JSON. Falling back to credentials file.', e.message);
      }
    }

    if (!auth) {
      if (!fs.existsSync(keyFilePath)) {
        throw new Error(`Credentials file not found at ${keyFilePath}. Provide GOOGLE_SERVICE_ACCOUNT_JSON or create the file.`);
      }
      auth = new google.auth.GoogleAuth({
        keyFile: keyFilePath,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });
      console.log(`Using credentials file at ${keyFilePath} for Sheets auth`);
    }

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || '1JNNj9gv3CSIlCkkthdbffmginbrd_cVQpcKCAzrQrc8';
    const range = process.env.GOOGLE_SHEETS_RANGE || 'Sheet1!A1';

    console.log(`Appending to Spreadsheet ID: ${spreadsheetId}, Range: ${range}`);

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
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


